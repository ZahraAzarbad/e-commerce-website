import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  userName: Yup.string()
    .min(5, "Password must be at least 6 characters")
    .required("Password is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
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
