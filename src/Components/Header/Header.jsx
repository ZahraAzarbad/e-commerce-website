import { Link } from "react-router-dom";

function Header() {
  // const [showSearchBar, setShowSearchBar] = useState(false);
  // const [filteredProducts, setFilteredProducts] = useState([]);
  // const [searchQuery, setSearchQuery] = useState("");

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
    <div className="flex flex-col">
      <div className="fixed w-full top-0 bg-transparent backdrop-blur-xl z-40 flex justify-between items-center px-5 text-green-900">
        <div className="flex gap-3">
          <div className="flex gap-2 justify-center hover:font-bold items-center p-1">
            <button>
              <Link to="/orders/inprogress">ورود به مدیریت</Link>
            </button>

            <i className=" text-xl bi bi-person-check-fill"></i>
          </div>
          <div className="flex gap-2 justify-center items-center p-1  hover:font-bold">
            <button>
              <Link to="/cart">سبد خرید</Link>
              {/* {products.length > 0 && (
            <p className="absolute top-1 right-2 bg-primeColor text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">
              {products.length}
            </p>
          )} */}
            </button>
            <i className=" text-xl bi bi-bag-fill"></i>
          </div>
          <div className="flex gap-2 justify-center items-center p-1  hover:font-bold">
            <button>
              <Link to="/signup">ورود | ثبت نام</Link>
            </button>
            <i className=" text-2xl bi bi-box-arrow-in-left"></i>
          </div>
        </div>
        {/* <div className=" w-3/12 flex justify-end gap-1 px-2 bg-white rounded-2xl text-right">
          <input
            className="text-right w-full outline-none"
            placeholder=" جستجو کنید"
          />
          <i className="bi bi-search"></i>
        </div> */}
        <Link to="/">
          <img className="w-16 h-16" src="./src/assets/img/tisa1.png" />
        </Link>
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

// import { useEffect, useState } from "react";
// import { Link, NavLink, useLocation } from "react-router-dom";
// import { MdClose } from "react-icons/md";
// import { HiMenuAlt2 } from "react-icons/hi";
// import { motion } from "framer-motion";
// import tisa1 from "../assets/img/tisa1.png";
// import Image from "../product/Image";
// import { navBarList } from "../../../constants";
// import Flex from "../../designLayouts/Flex";

// const Header = () => {
//   const [showMenu, setShowMenu] = useState(true);
//   const [sidenav, setSidenav] = useState(false);
//   const [category, setCategory] = useState(false);
//   const [brand, setBrand] = useState(false);
//   const location = useLocation();
//   useEffect(() => {
//     let ResponsiveMenu = () => {
//       if (window.innerWidth < 667) {
//         setShowMenu(false);
//       } else {
//         setShowMenu(true);
//       }
//     };
//     ResponsiveMenu();
//     window.addEventListener("resize", ResponsiveMenu);
//   }, []);

//   return (
//     <div className="w-full h-20 bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-200">
//       <nav className="h-full px-4 max-w-container mx-auto relative">
//         <Flex className="flex items-center justify-between h-full">
//           <Link to="/">
//             <div>
//               <Image className="w-20 object-cover" imgSrc={tisa1} />
//             </div>
//           </Link>
//           <div>
//             {showMenu && (
//               <motion.ul
//                 initial={{ y: 30, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//                 className="flex items-center w-auto z-50 p-0 gap-2"
//               >
//                 <>
//                   {navBarList.map(({ _id, title, link }) => (
//                     <NavLink
//                       key={_id}
//                       className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
//                       to={link}
//                       state={{ data: location.pathname.split("/")[1] }}
//                     >
//                       <li>{title}</li>
//                     </NavLink>
//                   ))}
//                 </>
//               </motion.ul>
//             )}
//             <HiMenuAlt2
//               onClick={() => setSidenav(!sidenav)}
//               className="inline-block md:hidden cursor-pointer w-8 h-6 absolute top-6 right-4"
//             />
//             {sidenav && (
//               <div className="fixed top-0 left-0 w-full h-screen bg-black text-gray-200 bg-opacity-80 z-50">
//                 <motion.div
//                   initial={{ x: -300, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ duration: 0.5 }}
//                   className="w-[80%] h-full relative"
//                 >
//                   <div className="w-full h-full bg-primeColor p-6">
//                     <img className="w-28 mb-6" src={tisa1} alt="logoLight" />
//                     <ul className="text-gray-200 flex flex-col gap-2">
//                       {navBarList.map((item) => (
//                         <li
//                           className="font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
//                           key={item._id}
//                         >
//                           <NavLink
//                             to={item.link}
//                             state={{ data: location.pathname.split("/")[1] }}
//                             onClick={() => setSidenav(false)}
//                           >
//                             {item.title}
//                           </NavLink>
//                         </li>
//                       ))}
//                     </ul>
//                     <div className="mt-4">
//                       <h1
//                         onClick={() => setCategory(!category)}
//                         className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
//                       >
//                         Shop by Category{" "}
//                         <span className="text-lg">{category ? "-" : "+"}</span>
//                       </h1>
//                       {category && (
//                         <motion.ul
//                           initial={{ y: 15, opacity: 0 }}
//                           animate={{ y: 0, opacity: 1 }}
//                           transition={{ duration: 0.4 }}
//                           className="text-sm flex flex-col gap-1"
//                         >
//                           <li className="headerSedenavLi">New Arrivals</li>
//                           <li className="headerSedenavLi">Gudgets</li>
//                           <li className="headerSedenavLi">Accessories</li>
//                           <li className="headerSedenavLi">Electronics</li>
//                           <li className="headerSedenavLi">Others</li>
//                         </motion.ul>
//                       )}
//                     </div>
//                     <div className="mt-4">
//                       <h1
//                         onClick={() => setBrand(!brand)}
//                         className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
//                       >
//                         Shop by Brand
//                         <span className="text-lg">{brand ? "-" : "+"}</span>
//                       </h1>
//                       {brand && (
//                         <motion.ul
//                           initial={{ y: 15, opacity: 0 }}
//                           animate={{ y: 0, opacity: 1 }}
//                           transition={{ duration: 0.4 }}
//                           className="text-sm flex flex-col gap-1"
//                         >
//                           <li className="headerSedenavLi">New Arrivals</li>
//                           <li className="headerSedenavLi">Gudgets</li>
//                           <li className="headerSedenavLi">Accessories</li>
//                           <li className="headerSedenavLi">Electronics</li>
//                           <li className="headerSedenavLi">Others</li>
//                         </motion.ul>
//                       )}
//                     </div>
//                   </div>
//                   <span
//                     onClick={() => setSidenav(false)}
//                     className="w-8 h-8 border-[1px] border-gray-300 absolute top-2 -right-10 text-gray-300 text-2xl flex justify-center items-center cursor-pointer hover:border-red-500 hover:text-red-500 duration-300"
//                   >
//                     <MdClose />
//                   </span>
//                 </motion.div>
//               </div>
//             )}
//           </div>
//         </Flex>
//       </nav>
//     </div>
//   );
// };

// export default Header;
