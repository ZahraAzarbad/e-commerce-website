import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <>
      <div>Header</div>
      <Outlet />
      <div>footer</div>
    </>
  );
};
export default HomeLayout;
