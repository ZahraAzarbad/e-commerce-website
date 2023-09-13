import { Link } from "react-router-dom";
import ProductCard from "../../Components/product/ProductCard";

function ProductsPreview({ categories, products, categoryId, name, icon }) {
  const filteredProducts = products.data.products.filter(
    (item) => item.category === categoryId
  );
  console.log(products);
  const lastSixProducts = filteredProducts.slice(
    Math.max(filteredProducts.length - 6, 0)
  );
  return (
    <div className="my-8">
      <Link to={`/categorypage/${categoryId}`}>
        <div className=" flex gap-3 justify-end px-6 py-2 text-3xl text-green-950">
          {name}
          <img className="rounded-full" src={icon} />
        </div>
      </Link>

      <div className="px-5 py-2 text-3xl flex gap-4 justify-center">
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
