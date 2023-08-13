import { Link } from "react-router-dom";
const ProductPage = () => {
  return (
    <div className="flex gap-5 text-cyan-700 ">
      <div>ProductPage</div>
      <Link to="/">go back Home</Link>
    </div>
  );
};
export default ProductPage;
