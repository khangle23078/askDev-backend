import { User } from "../entities/user.entity"
import { dataSouce } from "./../configs/typeorm.config"
import jwt from 'jsonwebtoken'

export const registerNewUser = ({ userName, email, password }: any) => {
  const newUser = User.create({ userName, email, password })
  return User.save(newUser)
}

export const checkUserByEmail = (email: string) => {
  return User.exists({
    where: {
      email: email
    }
  })
}

export const findByEmail = (email: string) => {
  return User.findOneBy({
    email: email
  })
}

export const createTokens = (user_id: number) => {
  const accessToken = jwt.sign({ user_id: user_id }, process.env.ACCESS_TOKEN_SECRET as string, {
    algorithm: 'HS256',
    expiresIn: '1d'
  })

  const refreshToken = jwt.sign({ user_id: user_id }, process.env.REFRESH_TOKEN_SECRET as string, {
    algorithm: 'HS256',
    expiresIn: '1d'
  })

  return { accessToken, refreshToken }
}