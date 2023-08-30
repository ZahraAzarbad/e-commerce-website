import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Header() {
  // const [showSearchBar, setShowSearchBar] = useState(false);
  // const [filteredProducts, setFilteredProducts] = useState([]);
  // const [searchQuery, setSearchQuery] = useState("");

  const [category, setCategory] = useState(false);

  // const handleSearch = (e) => {
  //   setSearchQuery(e.target.value);
  // };

  // useEffect(() => {
  //   const filtered = paginationItems.filter((item) =>
  //     item.productName.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  //   setFilteredProducts(filtered);
  // }, [searchQuery]);

  return (
    <div>
      <div className="flex justify-between items-center bg-orange-400 px-5 text-green-950">
        <div className="flex gap-3">
          <div className="flex gap-2 justify-center items-center p-1 rounded-md">
            <button>
              <Link to="/orders/inprogress">ورود به مدیریت</Link>
            </button>

            <i className=" text-xl bi bi-person-check-fill"></i>
          </div>
          <div className="flex gap-2 justify-center items-center p-1 rounded-md">
            <button>
              <Link to="/cart">سبد خرید</Link>
            </button>
            <i className=" text-xl bi bi-bag-fill"></i>
          </div>
          <div className="flex gap-2 justify-center items-center p-1 rounded-md">
            <button>
              <Link to="/signup">ورود | ثبت نام</Link>
            </button>
            <i className=" text-2xl bi bi-box-arrow-in-left"></i>
          </div>
        </div>
        <div className=" w-3/12 flex justify-end gap-1 px-2 bg-white rounded-2xl text-right">
          <input
            className="text-right w-full outline-none"
            placeholder=" جستجو کنید"
          />
          <i className="bi bi-search"></i>
        </div>
        <Link to="/">
          <img src="./src/assets/img/tisa1.png" />
        </Link>
      </div>
      <div className=" px-5 py-1 text-green-900">
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
                className="w-full text-sm rounded-b-md bg-white p-3 gap-3 flex flex-col absolute left-0 top-full"
              >
                <li className="headerSedenavLi">آرایشی</li>
                <li className="headerSedenavLi">مراقبتی</li>
                <li className="headerSedenavLi">بهداشتی </li>
                <li className="headerSedenavLi">ماسک تخصصی</li>
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

      {/* 
      <div className="relative w-full lg:w-[600px] h-[50px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl">
        <input
          className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]"
          type="text"
          onChange={handleSearch}
          value={searchQuery}
          placeholder="Search your products here"
        />
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
      </div> */}
    </div>
  );
}

export default Header;
