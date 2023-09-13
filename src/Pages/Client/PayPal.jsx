import React from "react";
import Image from "../../Components/product/Image";
import Pardakht from "../../assets/img/Pardakht.jpg";
import { Link } from "react-router-dom";

function PayPal() {
  return (
    <div className="w-screen flex flex-col justify-center items-center">
      <Link to="/accept">
        <button className="bg-green-800 hover:bg-green-900 py-2 px-10 text-white font-bold">
          تکمیل فرآیند خرید
        </button>
      </Link>
      <Image className="w-full p-5" imgSrc={Pardakht} />
    </div>
  );
}

export default PayPal;
