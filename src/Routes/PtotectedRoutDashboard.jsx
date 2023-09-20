import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRouteDashboard = ({ children }) => {
  const userRole = useSelector((state) => state.user.role);
  const accessToken = Cookies.get("accessToken");

  const location = useLocation().pathname;

  return accessToken && userRole === "ADMIN" ? (
    children
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};

export default ProtectedRouteDashboard;
