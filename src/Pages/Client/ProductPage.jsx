// import React from "react";

// function ProductPage() {
//   return <div>ProductPage</div>;
// }

// export default ProductPage;

import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductPage = () => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  // Other product details
  const product = {
    name: "Product Name",
    category: "Category",
    brand: "Brand",
    price: 19.99,
    imageUrls: [
      "./src/assets/img/logo.jpg",
      "./src/assets/img/logo.jpg",
      "./src/assets/img/logo.jpg",
    ],
    subcategory: "Subcategory",
    description: "description",
  };

  const handleQuantityChange = (event) => {
    setSelectedQuantity(event.target.value);
  };

  const handleAddToCart = () => {
    console.log(`Added ${selectedQuantity} units of ${product.name} to cart.`);
  };

  return (
    <div className="flex flex-col justify-between p-10">
      <div className="flex justify-between">
        {" "}
        <div className="w-1/3">
          {" "}
          <Carousel>
            {/* Map through product images and create slides */}
            {product.imageUrls.map((imageUrl, index) => (
              <div key={index}>
                <img
                  src={imageUrl}
                  alt={`Image ${index}`}
                  className="mb-4 rounded-lg"
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className=" w-1/2 flex flex-col items-center justify-center ">
          {" "}
          <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-500 text-sm mb-1">{product.category}</p>
          <p className="text-gray-500 text-sm mb-3">{product.brand}</p>
          <p className="text-lg mb-3">${product.price.toFixed(2)}</p>
          <p className="text-gray-500 text-sm mb-2">{product.subcategory}</p>
          <div className="flex items-center mb-3">
            <label htmlFor="quantity" className="mr-2 text-gray-700 text-sm">
              تعداد :
            </label>
            <input
              type="number"
              id="quantity"
              min="1"
              className="w-16 px-2 py-1 border rounded"
              value={selectedQuantity}
              onChange={handleQuantityChange}
            />
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleAddToCart}
          >
            افزودن به سبد خرید
          </button>
        </div>
      </div>
      <div>
        <h2>توضیحات کالا</h2>
        <p className="text-gray-500 text-sm mb-3">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductPage;
