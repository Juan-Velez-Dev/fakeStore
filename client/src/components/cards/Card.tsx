import { motion, Variants } from "framer-motion";
import "./Card.css";

type CardProps = {
  productName: string;
  productPrice: number;
  productImage: string;
  productRating: number;
  productCategory: string;
};

const cardVariants: Variants = {
  hidden: {
    y: 200,
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

function Card({
  productName,
  productPrice,
  productImage,
  productRating,
  productCategory,
}: CardProps) {
  return (
    <motion.div
      className="card-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
    >
      <img src={productImage} alt={productName} className="card-image" />
      <h1 className="title">{productName}</h1>
      <div className="details-container">
        <div className="detail">
          <p>price</p>
          <h2>{productPrice}</h2>
        </div>
        <span className="separator">|</span>
        <div className="detail">
          <p>rating</p>
          <h3>{productRating}</h3>
        </div>
        <span className="separator">|</span>
        <div className="detail">
          <p>category</p>
          <h4>{productCategory}</h4>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
