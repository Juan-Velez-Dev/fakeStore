import { type RequestHandler } from 'express'
import getAllProducts from '../../controllers/products/getAllProducts'
// eslint-disable-next-line @typescript-eslint/no-misused-promises
const getAllProductsHandler: RequestHandler = async (_req, res) => {
  try {
    const products = await getAllProducts()
    res.status(200).json(products)
  } catch (error) {
    res.status(200).json((error as Error).message)
  }
}

export default getAllProductsHandler
