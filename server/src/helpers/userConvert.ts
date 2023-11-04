import { type User } from '../ts'

const userConvert = (data: User): User => {
  const newUser: User = {
    name: data.name,
    userName: data.userName,
    email: data.email,
    password: data.password
  }
  return newUser
}

export default userConvert
