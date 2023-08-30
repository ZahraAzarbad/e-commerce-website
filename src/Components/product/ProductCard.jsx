import Image from "./Image";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import ReadMoreOutlinedIcon from "@mui/icons-material/ReadMoreOutlined";
import { Link } from "react-router-dom";

function ProductCard({ name, image, price }) {
  return (
    <div className="w-48 flex flex-col justify-between items-center gap-2 px-3 py-3 my-2 bg-green-200  ">
      <Image imgSrc={image} className="rounded-md" />
      <p>{name}</p>
      <div className="w-full flex justify-between items-center ">
        <p>تومان{price}</p>
        <div className="flex gap-2">
          <AddShoppingCartOutlinedIcon />
          <Link to="/ProductPage">
            <ReadMoreOutlinedIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
