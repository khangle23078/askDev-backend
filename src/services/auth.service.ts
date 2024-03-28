import { User } from "../entities/user.entity"
import { dataSouce } from "./../configs/typeorm.config"

const userRepository = dataSouce.getRepository(User)

export const registerNewUser = ({ userName, email, password }: any) => {
  const newUser = userRepository.create({ userName, email, password })
  return userRepository.save(newUser)
}

export const checkUserByEmail = (email: string) => {
  return userRepository.exists({
    where: {
      email: email
    }
  })
}