import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import publicAxios from "../../Services/instances/publicAxios";
import ProductCard from "../../Components/product/ProductCard";
import { useSelector } from "react-redux";
import CategoriesSideBar from "../../Components/CategoriesSideBar";
import { Pagination } from "antd";

const CategoryPage = () => {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Number of items to display per page
  const { id } = useParams();

  useEffect(() => {
    // Calculate the start and end index based on current page and items per page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    publicAxios
      .get(`/products?category=${id}`)
      .then((res) => {
        const products = res.data.data.products;
        // Slice the products to display only the items for the current page
        const slicedData = products.slice(startIndex, endIndex);
        setData(slicedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id, currentPage, itemsPerPage]);

  const selectedCat = useSelector(
    (state) => state?.categories?.categories?.data?.categories
  );

  if (!data || !selectedCat) {
    return <p>Loading</p>;
  }

  const category = selectedCat.find((item) => item?._id === id);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex bg-gray-50">
      <div className="w-5/6 flex flex-col gap-5 text-green-900">
        <div className="px-6 pt-2 text-3xl text-green-950">
          {category?.name}
        </div>

        <div className="grid grid-cols-5 gap-3 px-6 justify-between items-center overflow-hidden">
          {data.map((product) => (
            <ProductCard
              id={product._id}
              key={product._id}
              name={product.name}
              image={`http://localhost:8000/images/products/images/${product.images[0]}`}
              price={product.price}
            />
          ))}
        </div>

        <div className="pagination-container">
          <Pagination defaultCurrent={1} total={totalPages} />
        </div>
      </div>
      <div className="w-1/6 px-4 bg-transparent backdrop-blur-xl z-40">
        {selectedCat.map((category) => (
          <CategoriesSideBar
            key={category._id}
            icon={`http://localhost:8000/images/categories/icons/${category.icon}`}
            categoryId={category._id}
            name={category.name}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
