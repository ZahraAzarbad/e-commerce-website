import { Link } from "react-router-dom";
const Products = () => {
  return (
    <div className="flex gap-5 text-cyan-700 ">
      <div>Products</div>
      <Link to="/Login">go back to Login</Link>
    </div>
  );
};
export default Products;
