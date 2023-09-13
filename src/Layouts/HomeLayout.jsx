import { Outlet } from "react-router";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchcategories } from "../Services/categoriesSlice";
import HeaderBottom from "../Components/Header/HeaderBottom";
import { addToCart, initCart } from "../Services/instances/CartSlice";
const HomeLayout = () => {
  const dispatch = useDispatch();

  // const cartProduct = localStorage.getItem("cart");
  // dispatch(addToCart(cartProduct));
  let cart = localStorage.getItem("cart") || "[]";
  cart = JSON.parse(cart);
  dispatch(initCart(cart));

  useEffect(() => {
    dispatch(fetchcategories());
  }, [dispatch]);

  return (
    <div className="w-full h-full flex-col">
      <Header />
      <HeaderBottom />
      <Outlet />
      <Footer className="flex items-end justify-end" />
    </div>
  );
};
export default HomeLayout;
