import createUserHandler from '../handlers/users/createUserHandler'
import express from 'express'
import deleteUserHandler from '../handlers/users/deleteUserHandler'
import getUserHandler from '../handlers/users/getUserHandler'

const userRouter = express.Router()

userRouter.post('/create', createUserHandler)
userRouter.get('/:id', getUserHandler)
userRouter.delete('/delete/:id', deleteUserHandler)

export default userRouter
