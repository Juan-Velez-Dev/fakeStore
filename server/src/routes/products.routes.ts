import express from 'express'
import getAllProductsHandler from '../handlers/products/getAllProductsHandler'
import getCategoriesHandler from '../handlers/products/getCategoriesHandler'

const productsRouter = express.Router()
productsRouter.get('/', getAllProductsHandler)
productsRouter.get('/categories', getCategoriesHandler)

export default productsRouter
