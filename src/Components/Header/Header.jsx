import { Link } from "react-router-dom";

function Header() {
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
          <div className="flex gap-2 justify-center items-center p-1 hover:border-b-2 hover:border-b-green-950">
            <Link to="/categorypage"></Link>
            <i className=" text-xl bi bi-chevron-down"></i>
            <button>
              <Link to="/categorypage">دسته بندی ها</Link>
            </button>
            <i className=" text-xl bi bi-layers-fill"></i>
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
