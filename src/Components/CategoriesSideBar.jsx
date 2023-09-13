import { Link } from "react-router-dom";

function CategoriesSideBar({ name, categoryId, icon }) {
  //   const filteredProducts = products.data.products.filter(
  //     (item) => item.category === categoryId
  //   );
  console.log(icon);
  return (
    <div className=" flex flex-col  py-5 px-5 text-green-900  hover:scale-105 transition duration-500">
      <Link className="text-xl" to={`/categorypage/${categoryId}`}>
        <div className="flex gap-5 justify-end items-center text-xl">
          {name}
          <img src={icon} className="rounded-full w-10 h-10" />
        </div>
      </Link>
    </div>
  );
}

export default CategoriesSideBar;
