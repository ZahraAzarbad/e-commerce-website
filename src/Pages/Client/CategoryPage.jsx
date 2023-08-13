import { Link } from "react-router-dom";

const CategoryPage = () => {
  return (
    <div className="flex gap-5 text-cyan-700 ">
      <div>CategoryPage</div>
      <Link to="/">go back Home</Link>
    </div>
  );
};
export default CategoryPage;
