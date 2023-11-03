import createUserHandler from '../handlers/users/createUserHandler'
import getUsersHandler from '../handlers/users/getUsersHandler'
import express from 'express'

const router = express.Router()

router.post('/create', createUserHandler)
router.get('/test', getUsersHandler)

export default router
