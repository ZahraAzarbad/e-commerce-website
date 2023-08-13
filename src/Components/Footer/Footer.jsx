// import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className=" bg-green-950  text-white">
      <div className=" flex justify-between  p-10 ">
        <img src="./src/assets/img/enamad.png" />
        <div className="text-2xl flex gap-4 items-center">
          <i className="bi bi-instagram"></i>
          <i className="bi bi-whatsapp"></i>
          <i className="bi bi-telegram"></i>
        </div>
        <ul className="text-right">
          <li>قوانین و مقررات</li>
          <li>سوالات متداول</li>
          <li>تماس با ما</li>
          <li>نحوه ثبت سفارش</li>
        </ul>
      </div>
      <div className="border-t-2 border-t-white flex justify-between p-3 mt-20">
        <p> طراحی و اجرا : زهرا آذرباد</p>
        <p>تمامی حقوق مادی و معنوی متعلق به تیسا استور می باشد</p>
      </div>
    </div>
  );
}

export default Footer;
