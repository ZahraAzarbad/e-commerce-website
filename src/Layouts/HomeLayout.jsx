import { Outlet } from "react-router";
import Header from "../Components/Header/Header";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <div>footer</div>
    </>
  );
};
export default HomeLayout;
