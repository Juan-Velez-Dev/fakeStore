import { type RequestHandler } from 'express'
import getAllCategories from '../../controllers/products/getAllCategories'

// eslint-disable-next-line @typescript-eslint/no-misused-promises
const getAllCategoriesHandler: RequestHandler = async (_req, res) => {
  try {
    const categories: string[] | null = await getAllCategories()
    if (categories !== null) res.status(200).json(categories)
  } catch (error) {
    res.status(500).json((error as Error).message)
  }
}

export default getAllCategoriesHandler
