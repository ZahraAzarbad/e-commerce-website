import { Outlet } from "react-router";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const HomeLayout = () => {
  return (
    <div className="w-full h-full flex-col">
      <Header />
      <Outlet />
      <Footer className="flex items-end justify-end" />
    </div>
  );
};
export default HomeLayout;
