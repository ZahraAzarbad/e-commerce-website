import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div>login</div>;<Link to="/Orders">go to Orders</Link>
      <Link to="/priceandinventory">go to Price & Inventory</Link>
      <Link to="/products">go to Products</Link>
      <Link to="/">go back Home</Link>
    </>
  );
};
export default Login;
