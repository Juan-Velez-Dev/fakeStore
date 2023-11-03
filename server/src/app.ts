import express from 'express'
import morgan from 'morgan'
import userRouter from './routes/users.routes'
import cors from 'cors'

const app = express()
// middleware for app
app.use(morgan('dev'))
app.use(express.json())
app.use('/user', userRouter)
app.use(cors())

export default app
