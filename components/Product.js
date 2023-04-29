import Image from "next/image";
import Styles from "./../styles/Product.module.css";
import Link from "next/link";
const Product = ({ product }) => {
  const { title, id, price, image } = product;
  return (
    <div className={Styles.product}>
      <div>
        <Image src={image} width="200" height="200" alt={product.title} />
      </div>
      <ul>
        <li>{title}</li>
        <li>{price}$</li>
      </ul>
      <Link href={`/products/${id}`} className="button">More Details</Link>
    </div>
  );
};

export default Product;
