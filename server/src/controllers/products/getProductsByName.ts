import axios from 'axios'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getProductsByName = async (name: string) => {
  try {
    const { data } = await axios('https://fakestoreapi.com/products')
    const filteredData = data.filter((product: { title: string }) => product.title.toLocaleLowerCase()
      .includes(name.toLocaleLowerCase()))
    return filteredData
  } catch (error) {
    return null
  }
}

export default getProductsByName
