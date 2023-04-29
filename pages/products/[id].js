import Head from "next/head";
import Image from "next/image";

const singlProduct = ({product}) => {
    const {title,price,description,category,image} = product;
  return <div className="container">
    <Head>
        <title>{title}</title>
        <meta name="description" content={description}/>
    </Head>
    <div>
        <Image src={image} width="300" height="400" alt={title} />
    </div>
    <div>
        <h2>{title}</h2>
        <h3>{category}</h3>
        <h1>{price} $</h1>
        <p>{description}</p>
    </div>
  </div>;
};

export default singlProduct;

export async function getStaticPaths() {
  const req = await fetch("https://fakestoreapi.com/products");
  const products = await req.json();
  const paths = products.map((product) => {
    return {
      params: { id: product.id.toString() },
    };
  });
  return {
    paths,
    fallback:false
  };
}

export async function getStaticProps(context) {
    const id =context.params.id;
    const req =await fetch("https://fakestoreapi.com/products/" + id)
    const product = await req.json();
    return{
        props:{
            product
        }
    }
}

