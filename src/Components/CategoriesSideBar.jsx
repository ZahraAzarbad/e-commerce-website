import { Link } from "react-router-dom";

function CategoriesSideBar({ name, categoryId, icon }) {
  //   const filteredProducts = products.data.products.filter(
  //     (item) => item.category === categoryId
  //   );
  console.log(icon);
  return (
    <div className=" flex flex-col  py-5 px-10 text-green-950">
      <Link className="text-xl" to={`/categorypage/${categoryId}`}>
        <img src={icon} />
        {name}
      </Link>
    </div>
  );
}

export default CategoriesSideBar;
