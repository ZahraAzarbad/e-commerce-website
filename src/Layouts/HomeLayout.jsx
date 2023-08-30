import { Outlet } from "react-router";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchcategories } from "../Services/categoriesSlice";
const HomeLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchcategories());
  }, [dispatch]);

  return (
    <div className="w-full h-full flex-col">
      <Header />
      <Outlet />
      <Footer className="flex items-end justify-end" />
    </div>
  );
};
export default HomeLayout;
