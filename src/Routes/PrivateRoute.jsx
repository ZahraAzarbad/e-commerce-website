import Cookies from "js-cookie";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const accessToken = Cookies.get("accessToken");

  const location = useLocation().pathname;

  return accessToken ? (
    children
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};

export default PrivateRoute;
