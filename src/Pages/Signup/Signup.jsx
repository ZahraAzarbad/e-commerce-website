import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  userName: Yup.string()
    .min(5, "Password must be at least 6 characters")
    .required("Password is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  address: Yup.string().required("Address is required"),
  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, "Invalid phone number")
    .required("Phone Number is required"),
  date: Yup.date().required("Date is required"),
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

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-semibold mb-4">Registration Form</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className={`form-input mt-1 w-full ${
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
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className={`form-input mt-1 w-full ${
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
            userName
          </label>
          <input
            type="userName"
            id="userName"
            className={`form-input mt-1 w-full ${
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
            Password
          </label>
          <input
            type="password"
            id="password"
            className={`form-input mt-1 w-full ${
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
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className={`form-input mt-1 w-full ${
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
            Address
          </label>
          <textarea
            id="address"
            className={`form-input mt-1 w-full ${
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
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            className={`form-input mt-1 w-full ${
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
            className="px-4 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600"
            disabled={!formik.isValid}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
