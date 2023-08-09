import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <>
      <div>Header</div>
      <Outlet />
      <div>footer</div>
    </>
  );
};
export default AdminLayout;
