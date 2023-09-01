import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useParams } from "react-router";
import publicAxios from "../../Services/instances/publicAxios";

const ProductPage = () => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [isOrder, setIsOrder] = useState(false);

  // if (product?.quantity === 0) {
  //   setIsOrder(true);
  // }
  console.log(product?.description);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      publicAxios.get(`/products/${id}`).then((res) => {
        setProduct(res.data.data.product);
        setIsOrder(res.data.data.product.quantity === 0);
      });
    }
  }, [id]);

  const handleQuantityChange = (event) => {
    setSelectedQuantity(event.target.value);
  };

  const handleAddToCart = () => {
    console.log(`Added ${selectedQuantity} units of ${product.name} to cart.`);
  };
  if (!product) {
    return <p>Loading</p>;
  }

  return (
    <div className="flex flex-col justify-between p-10">
      <div className="flex justify-between">
        {" "}
        <div className="w-1/3">
          {" "}
          <Carousel>
            {/* Map through product images and create slides */}
            {product?.images.map((imageUrl, index) => (
              <div key={index}>
                <img
                  src={`http://localhost:8000/images/products/images/${imageUrl}`}
                  alt={`Image ${index}`}
                  className="mb-4 rounded-lg"
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className=" w-1/2 flex flex-col items-center justify-center ">
          {" "}
          <h2 className="text-xl font-semibold mb-2">{product?.name}</h2>
          <p className="text-gray-500 text-sm mb-1">{product?.category.name}</p>
          <p className="text-gray-500 text-sm mb-3">{product?.brand}</p>
          <p className="text-gray-500 text-sm mb-3">عدد{product?.quantity}</p>
          <p className="text-lg mb-3">تومان{product.price}</p>
          <p className="text-gray-500 text-sm mb-2">
            {product?.subcategory.name}
          </p>
          <div className="flex items-center mb-3">
            <label htmlFor="quantity" className="mr-2 text-gray-700 text-sm">
              تعداد :
            </label>
            <input
              type="number"
              id="quantity"
              min="1"
              max={product?.quantity}
              className="w-16 px-2 py-1 border rounded"
              value={selectedQuantity}
              onChange={handleQuantityChange}
              disabled={selectedQuantity === 0}
            />
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleAddToCart}
            disabled={isOrder}
          >
            {isOrder ? "موجود شد خبرم کن" : " افزودن به سبد خرید"}
          </button>
        </div>
      </div>
      <div>
        <h2>توضیحات کالا</h2>
        <div dangerouslySetInnerHTML={{ __html: product.description }} />
      </div>
    </div>
  );
};

export default ProductPage;
