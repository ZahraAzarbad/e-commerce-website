import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <div className="text-3xl">Home</div>
      <div className="flex gap-5 text-cyan-700 ">
        <Link
          className="bg-green-950 text-white rounded-md px-7 py-3 m-5"
          to="/login"
        >
          Login Admin
        </Link>
      </div>
    </>
  );
};
export default HomePage;
