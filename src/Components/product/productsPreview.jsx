import { Link } from "react-router-dom";
import ProductCard from "../../Components/product/ProductCard";

function ProductsPreview({ categories, products, categoryId, name }) {
  const filteredProducts = products.data.products.filter(
    (item) => item.category === categoryId
  );
  console.log(products);
  const lastSixProducts = filteredProducts.slice(
    Math.max(filteredProducts.length - 6, 0)
  );
  return (
    <div className="bg-orange-100">
      <Link to={`/categorypage/${categoryId}`}>
        <div className="px-6 pt-2 text-3xl text-green-950">{name}</div>
      </Link>

      <div className="px-5 pb-2 my-7 text-3xl flex gap-2 justify-center">
        {lastSixProducts.map((product) => (
          <ProductCard
            id={product._id}
            key={product._id}
            name={product.name}
            image={`http://localhost:8000/images/products/images/${product.images[0]}`}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsPreview;
