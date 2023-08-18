import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

function Header() {
  const [category, setCategory] = useState(false);
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
          <div className="flex gap-2 justify-center items-center p-1 hover:border-b-2 hover:border-b-green-950">
            <button>تماس با ما</button>

            <i className=" text-xl bi bi-link-45deg"></i>
          </div>
          <div className="flex gap-2 justify-center items-center p-1 hover:border-b-2 hover:border-b-green-950">
            <button> سوالات متداول </button>

            <i className=" text-xl bi  bi-question-circle-fill"></i>
          </div>
          <div className="flex gap-2 justify-center items-center p-1 hover:border-b-2 hover:border-b-green-950 relative">
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
          <div className="flex gap-2 justify-center items-center p-1 hover:border-b-2 hover:border-b-green-950">
            <button>
              <Link to="/">خانه</Link>
            </button>
            <i className=" text-xl bi bi-house-door-fill"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
