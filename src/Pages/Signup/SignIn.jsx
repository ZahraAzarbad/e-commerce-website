import { useFormik } from "formik";
import * as Yup from "yup";
import publicAxios from "../../Services/instances/publicAxios";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../Services/userSlice";

const validationSchema = Yup.object().shape({
  userName: Yup.string()
    .min(5, "نام کاربری باید حداقل 5 کاراکتر باشد")
    .required("نام کاربری الزامی است"),
  password: Yup.string()
    .min(6, "رمز باید حداقل دارای 6 کاراکتر باشد")
    .required(" رمز الزامی است"),
});

const SignIn = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      publicAxios
        .post("/auth/login", {
          username: values.userName,
          password: values.password,
        })
        .then((res) => {
          Cookies.set("accessToken", res.data.token.accessToken);
          Cookies.set("refreshToken", res.data.token.refreshToken);
          localStorage.setItem("userId", res.data.data.user._id);
          dispatch(addUser(res.data));
          if (res.data.data.user.role === "USER") {
            navigate("/shipping");
          }
        });
    },
  });

  // const onSubmit = (values, { resetForm }) => {
  //   // if (values.username !== "admin" && values.password !== "admin1234") {
  //   //   setTimeout(() => {
  //   //     props.resetForm();
  //   //     props.setSubmitting(false);
  //   //   }, 20);
  //   //   toast.error("نام کاربری یا رمز عبور اشتباه است");
  //   // }
  //   publicAxios.post("/auth/login", values).then((res) => {
  //     Cookies.set("accessToken", res.data.token.accessToken);
  //     Cookies.set("refreshToken", res.data.token.refreshToken);
  //     // console.log(res);
  //     navigate("/shipping");
  //   });
  // };

  return (
    <div className="max-w-md mx-auto my-10  bg-skincare rounded-lg shadow-xl text-lg font-semibold">
      <h2 className="w-full bg-green-900 p-5 text-white text-center text-2xl font-semibold mb-4">
        ورود به سایت تیسا
      </h2>
      <form onSubmit={formik.handleSubmit} className="p-6">
        <div className="mb-4">
          <label htmlFor="userName" className="block text-gray-700">
            نام کاربری
          </label>
          <input
            type="userName"
            id="userName"
            className={`form-input mt-1 w-full h-10 rounded-md shadow-md bg-slate-100 ${
              formik.errors.userName ? "border-red-500" : "border-gray-300"
            }`}
            {...formik.getFieldProps("userName")}
          />
          {formik.touched.userName && formik.errors.userName && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.userName}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            رمز
          </label>
          <input
            type="password"
            id="password"
            className={`form-input mt-1 w-full h-10 rounded-md shadow-md bg-slate-100 ${
              formik.errors.password ? "border-red-500" : "border-gray-300"
            }`}
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.password}
            </p>
          )}
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full text-center px-4 py-2 text-white bg-green-800 rounded-md hover:bg-green-950"
            disabled={!formik.isValid}
          >
            ورود
          </button>
        </div>
        <div className="mt-6 text-center">
          <Link
            to="/signup"
            className="underline text-green-950 text-center text-lg"
          >
            حساب کاربری ندارید؟ ثبت نام
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
