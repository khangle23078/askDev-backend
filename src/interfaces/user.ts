export interface User {
  id?: number,
  userName: string,
  email: string,
  password: string
  avatar?: string,
  socialLinks?: string[],
  createAt?: string,
  updateAt?: string,
  hashPassword: void
}