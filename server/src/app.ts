import express from 'express'
import morgan from 'morgan'
import userRouter from './routes/users.routes'
import productsRouter from './routes/products.routes'
import cors from 'cors'

const app = express()
// middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173'
}))
app.use('/user', userRouter)
app.use('/products', productsRouter)

export default app
