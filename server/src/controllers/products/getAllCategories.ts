import axios from 'axios'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getAllCategories = async () => {
  try {
    const { data } = await axios('https://fakestoreapi.com/products/categories')
    const categories: string[] = data
    if (categories.length > 0) return categories
    else throw new Error('No categories')
  } catch (error) {
    return null
  }
}

export default getAllCategories
