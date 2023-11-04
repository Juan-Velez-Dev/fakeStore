import express from 'express'
import getProductsByNameHandler from '../handlers/products/getProductsByNameHandler'
import getAllProductsHandler from '../handlers/products/getAllProductsHandler'
import getAllCategoriesHandler from '../handlers/products/getAllCategoriesHandler'

// route in app => /products
const productsRouter = express.Router()
productsRouter.get('/', getAllProductsHandler)
productsRouter.get('/categories', getAllCategoriesHandler)
productsRouter.get('/:name', getProductsByNameHandler)

export default productsRouter
