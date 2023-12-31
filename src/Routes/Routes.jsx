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
import ProtectedRoute from "./protectedRoute";
import PrivateRoute from "./PrivateRoute";
import PayPal from "../Pages/Client/PayPal";
import Accept from "../Pages/Client/Accept";
import SignIn from "../Pages/Signup/SignIn";
import ProtectedRouteDashboard from "./PtotectedRoutDashboard";

export const router = createBrowserRouter([
  {
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/categorypage/:id",
        element: <CategoryPage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/paypal",
        element: <PayPal />,
      },
      {
        path: "/accept",
        element: <Accept />,
      },
      {
        path: "/productpage/:id",
        element: <ProductPage />,
      },
      {
        path: "/resultofpay",
        element: <ResultOfPay />,
      },
      {
        path: "/shipping",
        element: (
          <PrivateRoute path="/signin">
            <Shipping />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    element: <AdminLayout />,
    children: [
      {
        path: "/orders/deliverd",
        element: (
          <PrivateRoute>
            <DeliveredOrders />
          </PrivateRoute>
        ),
      },
      {
        path: "/orders/inprogress",
        element: (
          <ProtectedRouteDashboard>
            <InProgressOrders />
          </ProtectedRouteDashboard>
        ),
      },
      {
        path: "/priceandinventory",
        element: (
          <PrivateRoute>
            <PriceAndInventory />
          </PrivateRoute>
        ),
      },
      {
        path: "/products",
        element: (
          <PrivateRoute>
            <Products />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/bar",
        element: (
          <PrivateRoute>
            <Bar />
          </PrivateRoute>
        ),
      },
      {
        path: "/line",
        element: (
          <PrivateRoute>
            <Line />
          </PrivateRoute>
        ),
      },
      {
        path: "/pie",
        element: (
          <PrivateRoute>
            <Pie />
          </PrivateRoute>
        ),
      },
      {
        path: "/FAQ",
        element: (
          <PrivateRoute>
            <FAQ />
          </PrivateRoute>
        ),
      },
      {
        path: "/calendar",
        element: (
          <PrivateRoute>
            <Calendar />
          </PrivateRoute>
        ),
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
  {
    path: "/signin",
    element: (
      <ProtectedRoute>
        <SignIn />
      </ProtectedRoute>
    ),
  },
]);
