import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="flex gap-5 text-cyan-700 ">
      <div>Cart</div>
      <Link to="/">go back Home</Link>
    </div>
  );
};
export default Cart;
