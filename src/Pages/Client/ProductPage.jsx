import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useParams } from "react-router";
import publicAxios from "../../Services/instances/publicAxios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useDispatch } from "react-redux";
import addToCart from "../../Services/instances/CartSlice";

// import './styles.css';
const ProductPage = () => {
  const dispatch = useDispatch();
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
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
    console.log({ ...product, quantity: selectedQuantity });
    dispatch(addToCart({ ...product, quantity: selectedQuantity }));
  };
  if (!product) {
    return <p>Loading</p>;
  }

  return (
    <div className="flex flex-col justify-between p-7  ">
      <div className="flex gap-5 justify-between items-center pb-28 border-b border-b-gray-200">
        {" "}
        <div className="w-1/2 h-full ">
          {" "}
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="w-full h-full my-4 "
          >
            {" "}
            {product?.images.map((imageUrl, index) => (
              <div key={index}>
                <SwiperSlide className="h-full text-center text-lg bg-white flex justify-center items-center">
                  <img
                    src={`http://localhost:8000/images/products/images/${imageUrl}`}
                    alt={`Image ${index}`}
                    className="h-full m-4 rounded-lg"
                  />
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
        <div className=" w-1/2 h-full  flex flex-col px-20 items-center justify-center text-gray-600 shadow-md bg-gray-100 py-10">
          {" "}
          <h2 className="text-5xl font-semibold mb-4">{product?.name}</h2>
          <div className=" flex flex-col items-end ">
            <p className="text-gray-500 text-2xl  mb-1 flex  gap-1">
              {product?.category.name}
              <p className="text-2xl">:دسته بندی </p>
            </p>
            <p className="text-gray-500 text-2xl mb-1 flex gap-1">
              {product?.subcategory.name}
              <p className="text-2xl">:زیر دسته </p>
            </p>
            <p className="text-gray-500 text-2xl mb-1 flex gap-1">
              {product?.brand}
              <p className="text-2xl">:برند </p>
            </p>
            <p className="text-gray-500 text-2xl mb-4 flex gap-1">
              <p className="text-2xl">عدد</p>
              {product?.quantity}

              <p className="text-2xl">:موجودی </p>
            </p>
            <p className="text-4xl mb-4 flex gap-1 text-gray-700">
              <p className="text-2xl">تومان</p>

              {product.price}
              <p className="text-2xl">:قیمت</p>
            </p>
            <div className="flex gap-3 items-center mb-3">
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
              <label htmlFor="quantity" className="mr-2 text-gray-700 text-2xl">
                :تعداد
              </label>
            </div>
          </div>
          <button
            className="bg-btncolor text-gray-700 text-2xl px-4 py-2 rounded"
            onClick={handleAddToCart}
            disabled={isOrder}
          >
            {isOrder ? "موجود شد خبرم کن" : " افزودن به سبد خرید"}
          </button>
        </div>
      </div>
      <div className="text-gray-700 px-20 py-14">
        <h2 className="text-4xl pb-4">توضیحات کالا</h2>
        <div dangerouslySetInnerHTML={{ __html: product.description }} />
      </div>
    </div>
  );
};

export default ProductPage;
