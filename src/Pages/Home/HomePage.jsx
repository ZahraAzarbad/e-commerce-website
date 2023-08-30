import { useSelector } from "react-redux";
import useProduct from "../../Hooks/useProduct";
import ProductsPreview from "../../Components/product/productsPreview";
import Banner from "../../Components/Banner";

const HomePage = () => {
  const { isLoading, products } = useProduct();
  const categories = useSelector((state) => state.categories.categories);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!categories || categories.length === 0) {
    return <div>No categories found.</div>;
  }

  return (
    <div className="text-green-950">
      <Banner />
      {categories.data.categories.map((category) => {
        return (
          <ProductsPreview
            key={category._id}
            categories={categories}
            products={products}
            categoryId={category._id}
            name={category.name}
          />
        );
      })}
    </div>
  );
};

export default HomePage;
