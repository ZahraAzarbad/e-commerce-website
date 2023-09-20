import { useFormik } from "formik";
import * as Yup from "yup";
import publicAxios from "../../Services/instances/publicAxios";
import Cookies from "js-cookie";
import { Navigate } from "react-router";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("نام باید وارد شود"),
  lastName: Yup.string().required("نام خانوادگی باید وارد شود"),
  userName: Yup.string()
    .min(5, "نام کاربری باید حداقل 5 کاراکتر باشد")
    .required("نام کاربری الزامی است"),
  password: Yup.string()
    .min(6, "رمز باید حداقل دارای 6 کاراکتر باشد")
    .required(" رمز الزامی است"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "رمز هم خوانی ندارد")
    .required("تکرار رمز الزامی است"),
  address: Yup.string().required("آدرس باید وارد شود"),
  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, "شماره تلفن صحیح نمی باشد")
    .required("شماره تلفن باید وارد شود"),
});

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      userName: "",
      password: "",
      confirmPassword: "",
      address: "",
      phoneNumber: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const onSubmit = (values, { resetForm }) => {
    // if (values.username !== "admin" && values.password !== "admin1234") {
    //   setTimeout(() => {
    //     props.resetForm();
    //     props.setSubmitting(false);
    //   }, 20);
    //   toast.error("نام کاربری یا رمز عبور اشتباه است");
    // }
    publicAxios.post("/auth/user", values).then((res) => {
      Cookies.set("accessToken", res.data.token.accessToken);
      Cookies.set("refreshToken", res.data.token.refreshToken);
      // console.log(res);
      Navigate("/shipping");
    });
  };

  return (
    <div className="max-w-md mx-auto my-10  bg-skincare rounded-lg shadow-xl text-lg font-semibold">
      <h2 className="w-full bg-green-900 p-5 text-white text-center text-2xl font-semibold mb-4">
        عضویت در سایت تیسا
      </h2>
      <form onSubmit={formik.handleSubmit} className="p-6">
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700">
            نام
          </label>
          <input
            type="text"
            id="firstName"
            className={`form-input mt-1 w-full h-10 rounded-md shadow-md bg-slate-100 ${
              formik.errors.firstName ? "border-red-500" : "border-gray-300"
            }`}
            {...formik.getFieldProps("firstName")}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.firstName}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700">
            نام خانوادگی
          </label>
          <input
            type="text"
            id="lastName"
            className={`form-input mt-1 w-full h-10 rounded-md shadow-md bg-slate-100 ${
              formik.errors.lastName ? "border-red-500" : "border-gray-300"
            }`}
            {...formik.getFieldProps("lastName")}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.lastName}
            </p>
          )}
        </div>

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
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-gray-700">
            تکرار رمز
          </label>
          <input
            type="password"
            id="confirmPassword"
            className={`form-input mt-1 w-full h-10 rounded-md shadow-md bg-slate-100 ${
              formik.errors.confirmPassword
                ? "border-red-500"
                : "border-gray-300"
            }`}
            {...formik.getFieldProps("confirmPassword")}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.confirmPassword}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700">
            آدرس
          </label>
          <textarea
            id="address"
            className={`form-input mt-1 w-full rounded-md shadow-md bg-slate-100 ${
              formik.errors.address ? "border-red-500" : "border-gray-300"
            }`}
            {...formik.getFieldProps("address")}
          ></textarea>
          {formik.touched.address && formik.errors.address && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.address}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-gray-700">
            شماره تلفن
          </label>
          <input
            type="text"
            id="phoneNumber"
            className={`form-input mt-1 w-full h-10 rounded-md shadow-md bg-slate-100 ${
              formik.errors.phoneNumber ? "border-red-500" : "border-gray-300"
            }`}
            {...formik.getFieldProps("phoneNumber")}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.phoneNumber}
            </p>
          )}
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full text-center px-4 py-2 text-white bg-green-800 rounded-md hover:bg-green-950"
            disabled={!formik.isValid}
          >
            عضویت و ورود
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
