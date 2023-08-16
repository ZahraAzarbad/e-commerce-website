import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/Home/HomePage";
import Login from "../Pages/Login/Login";
import HomeLayout from "../Layouts/HomeLayout";
import CategoryPage from "../Pages/Client/CategoryPage";
import ProductPage from "../Pages/Client/ProductPage";
import ResultOfPay from "../Pages/Client/ResultOfPay";
import Shipping from "../Pages/Client/Shipping";
import AdminLayout from "../Layouts/AdminLayout";
import DeliveredOrders from "../Pages/Admin/DeliveredOrders";
import InProgressOrders from "../Pages/Admin/InProgressOrders";
import PriceAndInventory from "../Pages/Admin/Price&Inventory";
import Products from "../Pages/Admin/Products";
import Bar from "../Pages/Admin/Bar";
import Line from "../Pages/Admin/Line";
import Pie from "../Pages/Admin/Pie";
import FAQ from "../Pages/Admin/FAQ";
import Calendar from "../Pages/Admin/Calendar";
import Signup from "../Pages/Signup/Signup";
import Cart from "../Pages/Client/Cart";
import Dashboard from "../Pages/Admin/Scenes/Dashboard";

export const router = createBrowserRouter([
  {
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
        path: "/cart",
        element: <Cart />,
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
    element: <AdminLayout />,
    children: [
      {
        path: "/orders/deliverd",
        element: <DeliveredOrders />,
      },
      {
        path: "/orders/inprogress",
        element: <InProgressOrders />,
      },
      {
        path: "/priceandinventory",
        element: <PriceAndInventory />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/bar",
        element: <Bar />,
      },
      {
        path: "/line",
        element: <Line />,
      },
      {
        path: "/pie",
        element: <Pie />,
      },
      {
        path: "/FAQ",
        element: <FAQ />,
      },
      {
        path: "/calendar",
        element: <Calendar />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);
