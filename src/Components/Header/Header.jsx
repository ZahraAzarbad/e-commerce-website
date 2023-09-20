import { Link } from "react-router-dom";

function Header() {
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
            </button>
            <i className=" text-xl bi bi-bag-fill"></i>
          </div>
          <div className="flex gap-2 justify-center items-center p-1  hover:font-bold">
            <button>
              <Link to="/signIn">ورود | ثبت نام</Link>
            </button>
            <i className=" text-2xl bi bi-box-arrow-in-left"></i>
          </div>
        </div>

        <Link to="/">
          <img className="w-16 h-16" src="./src/assets/img/tisa1.png" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
