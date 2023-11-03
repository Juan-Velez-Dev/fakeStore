import axios from 'axios'

const getAllProducts = async () => {
  try {
    const { data } = await axios('https://fakestoreapi.com/products')
    return data
  } catch (error) {
    return null
  }
}

export default getAllProducts
