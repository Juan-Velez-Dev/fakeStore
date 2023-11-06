import { useSelector } from "react-redux/es/hooks/useSelector";
import Card from "./Card";

type Product = {
    title: string
    price: number
    image: string
    rating: {
        rate: number
        count: number
    }
    category: string
}

type State = {
    products: {
        products: Product[]
    }
}

function Cards() {
    const products = useSelector((state: State) => state.products.products);
  return (
    <div className="flex flex-row flex-wrap gap-[150px] mt-[40px] justify-center">
    {
        products?.map((product: Product, index: number)=>{
            return <Card
            key={index}
            productName={product.title}
            productPrice={product.price}
            productImage={product.image}
            productRating={product.rating.rate}
            productCategory={product.category}
            />
        })
    }
    </div>
  )
}

export default Cards