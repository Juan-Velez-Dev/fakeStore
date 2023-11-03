import createUserHandler from '../handlers/users/createUserHandler'
import express from 'express'

const userRouter = express.Router()

userRouter.post('/create', createUserHandler)

export default userRouter
