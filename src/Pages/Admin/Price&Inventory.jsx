import { Link } from "react-router-dom";

const PriceAndInventory = () => {
  return (
    <div className="flex gap-5 text-cyan-700 ">
      <div>PriceAndInventory</div>
      <Link to="/Login">go back to Login</Link>
    </div>
  );
};
export default PriceAndInventory;
