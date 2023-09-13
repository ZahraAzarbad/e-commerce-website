import { useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  deleteProducts,
  drecreaseQuantity,
  increaseQuantity,
} from "../../Services/instances/CartSlice";

const ItemCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full grid grid-cols-5 mb-4 border py-2">
      <div className="flex col-span-5 mdl:col-span-2 items-center gap-4 ml-4">
        <DeleteIcon
          onClick={() => dispatch(deleteProducts(product._id))}
          className="text-primeColor hover:text-red-500 duration-300 cursor-pointer"
        />
      </div>
      <div className="col-span-5 mdl:col-span-3 flex items-center justify-between py-4 mdl:py-0 px-4 mdl:px-0 gap-6 mdl:gap-0">
        <div className="w-1/3 flex items-center font-titleFont font-bold text-lg">
          <p>${product?.quantity * product?.price}</p>
        </div>

        <div className="w-1/3 flex products-center gap-6 text-lg">
          <span
            onClick={() => dispatch(drecreaseQuantity({ _id: product._id }))}
            className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
          >
            -
          </span>
          <p>{product?.quantity}</p>
          <span
            onClick={() => dispatch(increaseQuantity({ _id: product?._id }))}
            className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
          >
            +
          </span>
        </div>

        <div className="flex w-1/3 items-center text-lg font-semibold">
          250000
        </div>
      </div>
      <h1 className="font-titleFont font-semibold">{product?.name}</h1>
      <img
        className="w-32 h-32"
        src={`http://localhost:8000/images/products/images/${product?.images[0]}`}
        alt="productImage"
      />
    </div>
  );
};

export default ItemCard;
