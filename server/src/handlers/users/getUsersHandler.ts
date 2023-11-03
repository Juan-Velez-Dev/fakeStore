import { type RequestHandler } from 'express'
import User from '../../models/User'

// eslint-disable-next-line @typescript-eslint/no-misused-promises
const getUsersHandler: RequestHandler = async (_req, res) => {
  try {
    const usersFind = await User.find()
    return res.status(200).json(usersFind)
  } catch (error) {
    return null
  }
}

export default getUsersHandler
