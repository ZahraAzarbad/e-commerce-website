import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import Breadcrumbs from "../../Components/BreadCrumbs";
import { deleteProducts } from "../../Services/instances/CartSlice";
import emptyCart from "../../assets/img/emptyCart.png";
// import ItemCard from "./ItemCard";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  drecreaseQuantity,
  increaseQuantity,
} from "../../Services/instances/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const [totalAmt, setTotalAmt] = useState("");
  const [shippingCharge, setShippingCharge] = useState("");
  useEffect(() => {
    let price = 0;
    products.map((item) => {
      price += item.price * item.count;
      return price;
    });
    setTotalAmt(price);
  }, [products]);
  useEffect(() => {
    if (totalAmt <= 200) {
      setShippingCharge(30);
    } else if (totalAmt <= 400) {
      setShippingCharge(25);
    } else if (totalAmt > 401) {
      setShippingCharge(20);
    }
  }, [totalAmt]);
  if (products.length === 0)
    return (
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col mdl:flex-row justify-center items-center gap-4 p-20"
      >
        <div>
          <img
            className="w-80 rounded-lg p-4 mx-auto"
            src={emptyCart}
            alt="emptyCart"
          />
        </div>
        <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center">
          <h1 className=" text-xl font-bold uppercase">
            سبد خرید شما خالی است
          </h1>
          <Link to="/">
            <button className="bg-green-100 rounded-md cursor-pointer hover:bg-green-900 active:bg-gray-900 px-8 py-2 font-semibold text-lg text-green-900 hover:text-green-100 duration-300">
              به خرید کردن ادامه می دهید؟
            </button>
          </Link>
        </div>
      </motion.div>
    );
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Cart" />
      <div className="pb-20">
        <table className="w-full divide-y divide-gray-100">
          <thead className="w-full">
            <tr className="w-full  flex justify-between items-center">
              <th className="px-6 py-3 flex justify-center items-center text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                حذف
              </th>
              <th className="px-6 py-3 flex justify-center items-center text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                جمع کل
              </th>
              <th className="px-6 py-3 flex justify-center items-center text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                تعداد
              </th>
              <th className="px-6 py-3 flex justify-center items-center text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                قیمت
              </th>
              <th className="px-6 py-3 flex justify-center items-center text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                نام
              </th>
              <th className="px-6 py-3 flex justify-center items-center text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                عکس
              </th>
            </tr>
          </thead>
          <tbody className="w-full">
            {products.map((product) => (
              <tr
                key={product._id}
                className="w-full flex justify-between items-center"
              >
                <td className="px-6 py-4 flex justify-center items-center whitespace-no-wrap border-b border-gray-200">
                  <DeleteIcon
                    onClick={() => dispatch(deleteProducts(product._id))}
                    className="text-primeColor hover:text-red-500 duration-300 cursor-pointer"
                  />
                </td>
                <td className="px-6 py-4 flex justify-center items-center whitespace-no-wrap border-b border-gray-200">
                  {product.price * product.count}
                </td>
                <td className="px-6 py-4 flex justify-center items-center whitespace-no-wrap border-b border-gray-200">
                  <span className="flex items-center">
                    <span
                      onClick={() =>
                        dispatch(drecreaseQuantity({ _id: product._id }))
                      }
                      className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
                    >
                      -
                    </span>
                    {product.count}
                    <span
                      onClick={() =>
                        dispatch(increaseQuantity({ _id: product?._id }))
                      }
                      className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
                    >
                      +
                    </span>
                  </span>
                </td>
                <td className="px-6 py-4 flex justify-center items-center whitespace-no-wrap border-b border-gray-200">
                  <div className="flex items-center text-lg font-semibold">
                    {product.price}
                  </div>
                </td>
                <td className="px-6 py-4 flex justify-center items-center whitespace-no-wrap border-b border-gray-200">
                  <h1 className="font-titleFont font-semibold">
                    {product.name}
                  </h1>
                </td>
                <td className="px-6 py-4 flex justify-center items-center whitespace-no-wrap border-b border-gray-200">
                  <img
                    className="w-32 h-32"
                    src={`http://localhost:8000/images/products/images/${product?.images[0]}`}
                    alt="productImage"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="max-w-7xl gap-4 flex justify-between items-center mt-4">
          <div className="flex justify-center items-center">
            <Link to="/Shipping">
              <button className="w-52 h-10 bg-green-500 text-white text-center text-xl hover:bg-black duration-300">
                پرداخت
              </button>
            </Link>
          </div>
          <div className="w-96 flex flex-col gap-4">
            <h1 className="text-2xl font-semibold text-right">فاکتور خرید</h1>
            <div>
              <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                جمع سفارشات
                <span className="font-semibold tracking-wide font-titleFont">
                  تومان{totalAmt}
                </span>
              </p>
              <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                مالیات
                <span className="font-semibold tracking-wide font-titleFont">
                  تومان{shippingCharge}
                </span>
              </p>
              <p className="flex items-center justify-between border-[1px] border-gray-400 py-1.5 text-lg px-4 font-medium">
                جمع کل
                <span className="font-bold tracking-wide text-lg font-titleFont">
                  تومان{totalAmt + shippingCharge}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
