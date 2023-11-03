import express from 'express'
import morgan from 'morgan'
import userRouter from './routes/users.routes'
import productsRouter from './routes/products.routes'
import cors from 'cors'

const app = express()
// middleware
app.use(morgan('dev'))
app.use(express.json())
app.use('/user', userRouter)
app.use('/products', productsRouter)
app.use(cors())

export default app
