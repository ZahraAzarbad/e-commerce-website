import Image from "./Image";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import ReadMoreOutlinedIcon from "@mui/icons-material/ReadMoreOutlined";
import { Link } from "react-router-dom";

function ProductCard({ name, image, price, id }) {
  return (
    <Link to={`/ProductPage/${id}`}>
      <div className="w-48 flex flex-col justify-between items-center gap-1 px-3 pb-3 my-2 bg-gray-100 backdrop-blur-xl hover:scale-105 transition duration-500 cursor-pointer rounded-md shadow-lg ">
        <div className="w-48 h-48 relative">
          <Image imgSrc={image} className=" w-full h-full rounded-t-md" />
          <div className="absolute top-2 right-2 rounded-full p-1 backdrop-blur-xl hover:scale-75 transition duration-500">
            <Link to="/cart">
              <AddShoppingCartOutlinedIcon className="w-3 h-3 " />
            </Link>
          </div>
        </div>

        <p className="text-xl truncate px-5">{name}</p>
        <div className="w-full flex justify-center items-center px-3 ">
          <p className="flex justify-center items-center gap-1">
            <p>تومان</p>
            {price}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
