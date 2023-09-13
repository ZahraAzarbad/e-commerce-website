import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("نام باید وارد شود"),
  lastName: Yup.string().required("نام خانوادگی باید وارد شود"),
  address: Yup.string().required("آدرس باید وارد شود"),
  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, "شماره نامعتبر است")
    .required("شماره تلفن باید وارد شود"),
  date: Yup.date().required("تاریخ دریافت سفارش باید وارد شود"),
});

const Shipping = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
      date: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="w-full mx-auto mt-10 p-6 rounded-lg shadow-xl">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        فرم ثبت اطلاعات
      </h2>

      <form onSubmit={formik.handleSubmit}>
        <div className="flex w-full justify-between gap-10">
          {" "}
          <div className="mb-4 w-1/2">
            <label htmlFor="lastName" className="block text-gray-700">
              نام خانوادگی
            </label>
            <input
              type="text"
              id="lastName"
              className={`form-input mt-1 px-1 shadow-md h-10 outline-none bg-gray-100 w-full ${
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
          <div className="mb-4 w-1/2">
            <label htmlFor="firstName" className="block text-gray-700">
              نام
            </label>
            <input
              type="text"
              id="firstName"
              className={`form-input mt-1 px-1 shadow-md h-10 outline-none bg-gray-100 w-full ${
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
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700">
            آدرس
          </label>
          <textarea
            id="address"
            className={`px-1 shadow-md h-24 outline-none bg-gray-100 w-1/2 ${
              formik.errors.address ? "border-red-500" : "border-gray-300"
            }`}
            {...formik.getFieldProps("address")}
          ></textarea>
          {formik.touched.address && formik.errors.address && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.address}</p>
          )}
        </div>
        <div className="flex w-full justify-center items-center gap-5">
          {" "}
          <div className="mb-4 w-full">
            <label htmlFor="phoneNumber" className="block text-gray-700">
              شماره تلفن
            </label>
            <input
              type="text"
              id="phoneNumber"
              className={`form-input mt-1 px-1 shadow-md h-10 outline-none bg-gray-100 w-1/3 ${
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
          <div className="mb-4 w-full">
            <label htmlFor="date" className="block text-gray-700">
              انتخاب روز تحویل سفارش
            </label>
            <input
              type="date"
              id="date"
              className={`form-input mt-1 px-1 shadow-md h-10 outline-none bg-gray-100 w-1/3 ${
                formik.errors.date ? "border-red-500" : "border-gray-300"
              }`}
              {...formik.getFieldProps("date")}
            />
            {formik.touched.date && formik.errors.date && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.date}</p>
            )}
          </div>
        </div>

        <div className="my-6 flex justify-start">
          <Link to="/paypal">
            <button
              type="submit"
              className="px-10 py-2 text-white bg-red-700 rounded-md hover:bg-green-800  cursor-pointer text-center"
              disabled={!formik.isValid}
            >
              پرداخت
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Shipping;
