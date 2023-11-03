import express from 'express'
import getAllProductsHandler from '../handlers/products/getAllProductsHandler'

const productsRouter = express.Router()
productsRouter.get('/', getAllProductsHandler)

export default productsRouter
