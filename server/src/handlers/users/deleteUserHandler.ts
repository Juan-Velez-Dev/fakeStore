import { type RequestHandler } from 'express'
import User from '../../models/User'

// eslint-disable-next-line @typescript-eslint/no-misused-promises
const deleteUserHandler: RequestHandler = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json((error as Error).message)
  }
}

export default deleteUserHandler
