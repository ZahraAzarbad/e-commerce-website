import Cookies from "js-cookie";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const accessToken = Cookies.get("accessToken");

  const location = useLocation().pathname;

  return !accessToken ? (
    children
  ) : (
    <Navigate to={"/"} state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
