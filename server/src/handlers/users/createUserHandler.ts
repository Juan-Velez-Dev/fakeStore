import createUser from '../../controllers/users/createUser'
import { type RequestHandler } from 'express'
import User from '../../models/User'

// eslint-disable-next-line @typescript-eslint/no-misused-promises
const createUserHandler: RequestHandler = async (req, res) => {
  try {
    const user = new User(createUser(req.body))
    const newUser = await user.save()
    res.status(200).json(newUser)
  } catch (error) {
    res.status(500).json((error as Error).message)
  }
}

export default createUserHandler
