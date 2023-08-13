import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div className="flex gap-5 text-cyan-700 ">
      <div>Orders</div>
      <Link to="/Login">go back to Login</Link>
    </div>
  );
};
export default Orders;
