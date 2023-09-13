import React from "react";
import Image from "../../Components/product/Image";
import greencheck from "../../assets/img/greencheck.png";
import { Link } from "react-router-dom";
function Accept() {
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
