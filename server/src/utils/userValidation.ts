import { type User } from '../ts'

const userValidation = (user: User): boolean => {
  const { name, userName, email, password } = user
  if (typeof name !== 'string') return false
  if (typeof userName !== 'string') return false
  if (typeof email !== 'string') return false
  if (typeof password !== 'string') return false
  return true
}

export default userValidation
