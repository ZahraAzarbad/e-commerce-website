import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <div className="text-3xl">Home</div>
      <div className="flex gap-5 text-cyan-700 ">
        <Link to="/productpage">go to Product page</Link>
        <Link to="/resultofpay">go to Pay Resault</Link>
        <Link to="/shipping">go to Shipping</Link>
      </div>
    </>
  );
};
export default HomePage;
