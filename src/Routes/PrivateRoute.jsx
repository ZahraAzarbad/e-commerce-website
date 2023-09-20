import Cookies from "js-cookie";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children, path = "/login" }) => {
  const accessToken = Cookies.get("accessToken");

  const location = useLocation().pathname;

  return accessToken ? (
    children
  ) : (
    <Navigate to={path} state={{ from: location }} replace />
  );
};

export default PrivateRoute;
