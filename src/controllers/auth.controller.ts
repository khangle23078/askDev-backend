import { Request, Response } from "express";
import { checkUserByEmail, registerNewUser } from "./../services/auth.service";
import { User } from "../entities/user.entity";

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
      const user = await registerNewUser({ userName, email, password })
      return res.status(200).json({
        status: 200,
        message: 'Đăng ký thành công!',
        data: user
      })
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error
    })
  }
}