import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import publicAxios from "../../Services/instances/publicAxios";
import SearchIcon from "@mui/icons-material/Search";

function HeaderBottom() {
  const [category, setCategory] = useState(false);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  const fetchData = async () => {
    const [productsResponse, categoriesResponse] = await Promise.all([
      publicAxios.get("/products", {
        params: {
          limit: 1000, // Request all products at once
        },
      }),
      publicAxios.get("/categories"),
    ]);

    const products = productsResponse.data.data.products;
    return products;
  };

  return (
    <div className=" flex justify-between px-5 py-1  text-green-900 pt-24">
      <div className="relative w-full lg:w-[600px] h-[50px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl shadow-md border-slate-300 border">
        <input
          className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]"
          type="text"
          onChange={handleSearch}
          value={searchQuery}
          placeholder="جستجو کنید"
        />
        <SearchIcon />
        {searchQuery && (
          <div
            className={`w-full mx-auto h-96 bg-white top-16 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer`}
          >
            {searchQuery &&
              filteredProducts.map((item) => (
                <div
                  onClick={() =>
                    navigate(
                      `/product/${item.productName
                        .toLowerCase()
                        .split(" ")
                        .join("")}`,
                      {
                        state: {
                          item: item,
                        },
                      }
                    ) &
                    setShowSearchBar(true) &
                    setSearchQuery("")
                  }
                  key={item._id}
                  className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3"
                >
                  <img className="w-24" src={item.img} alt="productImg" />
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-lg">{item.productName}</p>
                    <p className="text-xs">{item.des}</p>
                    <p className="text-sm">
                      Price:{" "}
                      <span className="text-primeColor font-semibold">
                        ${item.price}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
      <div className="flex justify-end gap-7">
        <div className="flex gap-2 justify-center items-center border-b-2 border-b-white p-1 hover:border-b-2 hover:border-b-green-950">
          <button>تماس با ما</button>

          <i className=" text-xl bi bi-link-45deg"></i>
        </div>
        <div className="flex gap-2 justify-center items-center border-b-2 border-b-white p-1 hover:border-b-2 hover:border-b-green-950">
          <button> سوالات متداول </button>

          <i className=" text-xl bi  bi-question-circle-fill"></i>
        </div>
        <div className="flex gap-2 justify-center items-center p-1 hover:border-b-2 hover:border-b-green-950 relative border-b-2 border-b-white">
          <button
            className="flex gap-2 justify-center items-center"
            onClick={() => setCategory(!category)}
          >
            <i className=" text-sm flex items-center bi bi-chevron-down"></i>
            <Link to="/categorypage">دسته بندی ها</Link>
            <i className=" text-xl bi bi-layers-fill"></i>
          </button>
          {category && (
            <motion.ul
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="w-full text-sm rounded-b-md bg-white flex flex-col absolute left-0 top-full z-20"
            >
              <Link to="/categorypage/64d8f4cbc2e821617d738c27">
                <li className="headerSedenavLi p-3 hover:bg-bgcolor">آرایشی</li>
              </Link>
              <Link to="/categorypage/64dd42bdd7c6f41d3873157c">
                <li className="headerSedenavLi p-3 hover:bg-bgcolor">
                  مراقبتی
                </li>
              </Link>
              <Link to="/categorypage/64dc80dff88b88b5f4068bd6">
                <li className="headerSedenavLi p-3 hover:bg-bgcolor">
                  بهداشتی{" "}
                </li>
              </Link>

              <Link to="/categorypage/64de50a56666f434559bc21e">
                <li className="headerSedenavLi p-3 hover:bg-bgcolor">
                  ماسک تخصصی
                </li>
              </Link>
            </motion.ul>
          )}
        </div>
        <div className="flex gap-2 justify-center items-center p-1 hover:border-b-2 hover:border-b-green-950 border-b-2 border-b-white">
          <button>
            <Link to="/">خانه</Link>
          </button>
          <i className=" text-xl bi bi-house-door-fill"></i>
        </div>
      </div>
    </div>
  );
}

export default HeaderBottom;
