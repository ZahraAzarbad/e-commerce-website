import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import publicAxios from "../../Services/instances/publicAxios";
import ProductCard from "../../Components/product/ProductCard";
import { useSelector } from "react-redux";
import CategoriesSideBar from "../../Components/CategoriesSideBar";

const CategoryPage = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    publicAxios.get(`/products?category=${id}`).then((res) => {
      setData(res.data.data.products);
    });
  }, [id]);

  const selectedCat = useSelector(
    (state) => state?.categories?.categories?.data?.categories
  );
  console.log(selectedCat);

  if (!data || !selectedCat) {
    return <p>Loading</p>;
  }
  // console.log(selectedCat);

  const category = selectedCat.find((item) => {
    return item?._id === id;
  });
  // console.log(category?.name);

  return (
    <div className="flex">
      <div className="w-5/6 flex flex-col gap-5 text-cyan-700 ">
        <div className="px-6 pt-2 text-3xl text-green-950">
          {category?.name}
        </div>

        <div className="grid grid-cols-5 gap-3 px-6 justify-between items-center overflow-hidden">
          {data.map((product) => {
            return (
              <ProductCard
                id={product._id}
                key={product._id}
                name={product.name}
                image={`http://localhost:8000/images/products/images/${product.images[0]}`}
                price={product.price}
              />
            );
          })}
        </div>
      </div>
      <div className="w-1/6 px-4">
        {selectedCat.map((category) => {
          return (
            <CategoriesSideBar
              key={category._id}
              icon={`http://localhost:8000/images/categories/icons/${category.icon}`}
              categoryId={category._id}
              name={category.name}
            />
          );
        })}
      </div>
    </div>
  );
};
export default CategoryPage;
