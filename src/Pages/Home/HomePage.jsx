import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <div className="text-3xl">Home</div>
      <div className="flex gap-5 text-cyan-700 ">
        <Link to="/Login">go to Admin page</Link>
        <Link to="/categorypage">go to Category page</Link>
        <Link to="/productpage">go to Product page</Link>
        <Link to="/resultofpay">go to Pay Resault</Link>
        <Link to="/shipping">go to Shipping</Link>
        <Link to="/cart">go to cart</Link>
      </div>
    </>
  );
};
export default HomePage;
