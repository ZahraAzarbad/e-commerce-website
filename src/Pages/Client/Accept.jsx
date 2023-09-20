import { useEffect } from "react";
import Image from "../../Components/product/Image";
import greencheck from "../../assets/img/greencheck.png";
import { Link } from "react-router-dom";
import privateAxios from "../../Services/instances/privateAxios";
function Accept() {
  const products = localStorage.getItem("basket");
  const list = JSON.parse(products);
  const deliveryDate = localStorage.getItem("deliveryDate");
  const userId = localStorage.getItem("userId");

  const newList = list.map((item) => {
    return { product: item._id, count: item.count };
  });

  const order = {
    user: userId,
    products: newList,
    deliveryStatus: true,
    deliveryDate: deliveryDate,
  };

  useEffect(() => {
    async function fetchData() {
      const requestBody = JSON.stringify(order);
      const response = await privateAxios.post("/orders", requestBody, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    fetchData();
  }, []);
  console.log(order);

  return (
    <div className="flex flex-col justify-center items-center">
      <Image className="w-52 h-52 p-5" imgSrc={greencheck} />
      <p className="font-bold text-3xl text-green-900 p-10">
        سفارش شما با موفقیت ثبت شد
      </p>
      <p className="font-bold text-xl text-green-900 pb-5">
        از خرید شما متشکریم
      </p>
      <Link to="/">
        <button className="bg-blue-600 rounded-md hover:bg-blue-700 py-2 px-10 text-white font-bold m-5">
          بازگشت به صفحه اصلی
        </button>
      </Link>
    </div>
  );
}

export default Accept;
