import { Outlet } from "react-router";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchcategories } from "../Services/categoriesSlice";
import HeaderBottom from "../Components/Header/HeaderBottom";
import { addToCart } from "../Services/instances/CartSlice";
const HomeLayout = () => {
  const dispatch = useDispatch();

  let cart = localStorage.getItem("basket");
  if (!cart) {
    dispatch(addToCart(cart));
  }

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
