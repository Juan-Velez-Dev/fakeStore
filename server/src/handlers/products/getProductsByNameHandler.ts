import { type RequestHandler } from 'express'
import getProductsByName from '../../controllers/products/getProductsByName'

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-misused-promises
const getProductsByNameHandler: RequestHandler = async (req, res) => {
  try {
    const { name } = req.params
    const products = await getProductsByName(name)
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json((error as Error).message)
  }
}

export default getProductsByNameHandler
