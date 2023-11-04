import { type RequestHandler } from 'express'
import User from '../../models/User'

// eslint-disable-next-line @typescript-eslint/no-misused-promises
const getUserHandler: RequestHandler = async (req, res) => {
  try {
    const userFind = await User.findById(req.params.id)
    return res.status(200).json(userFind)
  } catch (error) {
    return res.status(500).json((error as Error).message)
  }
}

export default getUserHandler
