import createUserHandler from '../handlers/users/createUserHandler'
import express from 'express'
import getUserHandler from '../handlers/users/getUserHandler'

const userRouter = express.Router()

userRouter.post('/create', createUserHandler)
userRouter.get('/:id', getUserHandler)

export default userRouter
