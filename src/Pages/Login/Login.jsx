import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="flex gap-5 text-cyan-700 ">
      <div>login</div>
      <Link to="/Orders">go to Orders</Link>
      <Link to="/priceandinventory">go to Price & Inventory</Link>
      <Link to="/products">go to Products</Link>
      <Link to="/">go back Home</Link>
    </div>
  );
};
export default Login;
