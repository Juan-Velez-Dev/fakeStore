import axios from 'axios'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getAllProducts = async () => {
  try {
    const { data } = await axios('https://fakestoreapi.com/products')
    return data
  } catch (error) {
    return null
  }
}

export default getAllProducts
