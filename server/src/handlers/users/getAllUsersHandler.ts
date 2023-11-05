import { type RequestHandler } from 'express'
import User from '../../models/User'

// eslint-disable-next-line @typescript-eslint/no-misused-promises
const getAllUsersHandler: RequestHandler = async (_req, res) => {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json((error as Error).message)
  }
}

export default getAllUsersHandler
