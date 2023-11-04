import express from 'express'
import getAllProductsHandler from '../handlers/products/getAllProductsHandler'
import getAllCategoriesHandler from '../handlers/products/getAllCategoriesHandler'

const productsRouter = express.Router()
productsRouter.get('/', getAllProductsHandler)
productsRouter.get('/categories', getAllCategoriesHandler)

export default productsRouter
