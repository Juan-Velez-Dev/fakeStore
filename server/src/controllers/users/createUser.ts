import userValidation from '../../utils/userValidation'
import userConvert from '../../helpers/userConvert'
import { type User } from '../../ts'

const createUser = (data: User): User => {
  const response: boolean = userValidation(data)
  if (response) return userConvert(data)
  else throw new Error('Invalid data!')
}

export default createUser
