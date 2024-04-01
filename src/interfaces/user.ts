import { Image } from "../entities/image.entity"

export interface IUser {
  id?: number,
  userName: string,
  email: string,
  password: string
  avatar?: Image,
  socialLinks?: string[],
  createAt?: string,
  updateAt?: string,
  hashPassword: void
}

