import { motion, Variants } from 'framer-motion'
import './Card.css'

type CardProps = {
    productName: string
    productPrice: number
    productImage: string
    productRating: number
    productCategory: string
}

const cardVariants: Variants ={
    hidden: {
        y: 300
    },
    visible: {
        y: 50,
        transition:{
            type: 'spring',
            bounce: 0.4,
            duration: 0.8
        }
    }
}

function Card({productName, productPrice, productImage, productRating, productCategory}: CardProps) {
  return (
    <motion.div 
    className='card-container'
    initial='hidden'
    whileInView='visible'
    viewport={{once: true}}
    variants={cardVariants}
    >
        <img 
        src={productImage} alt={productName} 
        className='card-image'
        />
        <h1>{productName}</h1>
        <h2>{productPrice}</h2>
        <h3>{productRating}</h3>
        <h4>{productCategory}</h4>
    </motion.div>
  )
}

export default Card