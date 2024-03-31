import { Request, Response } from "express";
import { checkUserByEmail, createTokens, findByEmail, registerNewUser } from "./../services/auth.service";
import { User } from "../entities/user.entity";
import { sign } from "jsonwebtoken";

export const register = async (req: Request, res: Response) => {
  try {
    const { userName, email, password }: User = req.body
    const existUser = await checkUserByEmail(email)

    if (existUser) {
      return res.status(401).json({
        status: 401,
        message: "Email đã tồn tại"
      })
    } else {
      await registerNewUser({ userName, email, password })
      return res.status(201).json({
        status: 201,
        message: 'Đăng ký thành công!',
      })
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error
    })
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body
    const existUser = await checkUserByEmail(email)

    if (!existUser) {
      return res.status(401).json({
        status: 401,
        message: 'Email không tồn tại'
      })

    }

    const user = await findByEmail(email)
    const isPasswordMatch = await User.comparePassword(user?.password as string, password)

    if (!isPasswordMatch) {
      return res.status(401).json({
        status: 401,
        message: 'Mật khẩu không chính xác!'
      })
    }

    const { accessToken, refreshToken } = createTokens(user?.id as number)

    return res.status(200).json({
      status: 200,
      message: 'Đăng nhập thành công!',
      access_token: accessToken,
      refresh_token: refreshToken
    })
  }
  catch (error) {
    return res.status(500).json({
      status: 500,
      message: error
    })
  }
}