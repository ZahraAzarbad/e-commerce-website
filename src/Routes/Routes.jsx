import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/Home/HomePage";
import Login from "../Pages/Login/Login";
import HomeLayout from "../Layouts/HomeLayout";
import CategoryPage from "../Pages/Client/CategoryPage";
import ProductPage from "../Pages/Client/ProductPage";
import ResultOfPay from "../Pages/Client/ResultOfPay";
import Shipping from "../Pages/Client/Shipping";
import AdminLayout from "../Layouts/AdminLayout";
import Orders from "../Pages/Admin/Orders";
import PriceAndInventory from "../Pages/Admin/Price&Inventory";
import Products from "../Pages/Admin/products";
import Signup from "../Pages/Signup/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/categorypage",
        element: <CategoryPage />,
      },
      {
        path: "/productpage",
        element: <ProductPage />,
      },
      {
        path: "/resultofpay",
        element: <ResultOfPay />,
      },
      {
        path: "/shipping",
        element: <Shipping />,
      },
    ],
  },
  {
    path: "/Adminlayout",
    element: <AdminLayout />,
    children: [
      {
        path: "/Orders",
        element: <Orders />,
      },
      {
        path: "/priceandinventory",
        element: <PriceAndInventory />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);
