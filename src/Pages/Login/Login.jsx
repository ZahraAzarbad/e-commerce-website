// // import { Link } from "react-router-dom";
// // const Login = () => {
// //   return (
// //     <div className="w-screen h-screen flex items-center justify-end bg-login-bg ">
// //       <div className=" w-1/3 max-[376px]:w-2/3 max-[376px]:mx-2 mx-40 flex flex-col items-center justify-center bg-green-500 ">
// //         <label>name</label>
// //         <input type="text" />
// //         <input type="text" />
// //         <button>enter</button>
// //       </div>
// //     </div>
// //   );
// // };
// // export default Login;
// import { Box, Button, TextField } from "@mui/material";
// import { Formik } from "formik";
// import * as yup from "yup";
// import useMediaQuery from "@mui/material/useMediaQuery";

// const Login = () => {
//   const isNonMobile = useMediaQuery("(min-width:600px)");

//   const handleFormSubmit = (values) => {
//     console.log(values);
//   };

//   return (
//     <div className="h-screen flex items-center justify-end bg-login-bg md:mx-28 mx-5">
//       <Box m="20px" width="400px">
//         <Formik
//           onSubmit={handleFormSubmit}
//           initialValues={initialValues}
//           validationSchema={checkoutSchema}
//         >
//           {({
//             values,
//             errors,
//             touched,
//             handleBlur,
//             handleChange,
//             handleSubmit,
//           }) => (
//             <form onSubmit={handleSubmit}>
//               <Box
//                 display="grid"
//                 gap="30px"
//                 gridTemplateColumns="repeat(4, minmax(0, 1fr))"
//                 sx={{
//                   "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
//                 }}
//               >
//                 <TextField
//                   fullWidth
//                   variant="filled"
//                   type="text"
//                   label="نام کاربری"
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   value={values.email}
//                   name="username"
//                   error={!!touched.email && !!errors.email}
//                   helperText={touched.email && errors.email}
//                   sx={{ gridColumn: "span 4" }}
//                 />
//                 <TextField
//                   fullWidth
//                   variant="filled"
//                   type="text"
//                   label="رمز"
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   value={values.contact}
//                   name="password"
//                   error={!!touched.contact && !!errors.contact}
//                   helperText={touched.contact && errors.contact}
//                   sx={{ gridColumn: "span 4" }}
//                 />
//               </Box>
//               <Box display="flex" justifyContent="center" mt="20px">
//                 <Button type="submit" color="secondary" variant="contained">
//                   ورود
//                 </Button>
//               </Box>
//             </form>
//           )}
//         </Formik>
//       </Box>
//     </div>
//   );
// };

// const phoneRegExp =
//   /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

// const checkoutSchema = yup.object().shape({
//   username: yup
//     .string()
//     .email("نام کاربری معتبر نیست")
//     .required("نام کاربری نمی تواند خالی باشد"),
//   password: yup
//     .string()
//     .matches(phoneRegExp, "رمز اشتباه است")
//     .required("رمز نمی تواند خالی باشد"),
// });
// const initialValues = {
//   username: "",
//   password: "",
// };

// export default Login;

import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Avatar,
} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
const Login = ({ handleChange }) => {
  const paperStyle = {
    padding: "40px 20px",
    height: "520px",
    width: 350,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "8px",
  };
  const remember = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const avatarStyle = {
    height: "150px",
    width: "150px",
  };
  const btnstyle = { margin: "8px 0" };
  const initialValues = {
    username: "",
    password: "",
    remember: false,
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("نام کاربری الزامی است"),
    password: Yup.string().required("رمز الزامی است"),
  });
  const onSubmit = (values, props) => {
    console.log(values);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };
  return (
    <div className="h-screen flex items-center justify-center md:justify-end md:mx-28 mx-5 bg-login-bg">
      <Grid>
        <Paper style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <img className="w-48 h-48" src="./src/assets/img/logo.jpg" />
            </Avatar>
          </Grid>
          <Grid>
            <h2
              style={{
                fontSize: "24px",
              }}
            >
              صفحه مدیریت تیسا استور
            </h2>
          </Grid>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(props) => (
              <Form dir="rtl">
                <Field
                  as={TextField}
                  label="نام کاربری"
                  name="username"
                  placeholder="نام کاربری را وارد کنید "
                  fullWidth
                  required
                  helperText={<ErrorMessage name="username" />}
                />
                <Field
                  as={TextField}
                  label="رمز"
                  name="password"
                  placeholder=" رمز را وارد کنید"
                  type="password"
                  fullWidth
                  required
                  helperText={<ErrorMessage name="password" />}
                />
                <Field
                  style={remember}
                  as={FormControlLabel}
                  name="remember"
                  control={<Checkbox color="primary" />}
                  label="مرا به خاطر داشته باش"
                />
                <Link to="/Orders/inprogress">
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    disabled={props.isSubmitting}
                    style={btnstyle}
                    fullWidth
                  >
                    {props.isSubmitting ? "Loading" : "ورود"}
                  </Button>
                </Link>
              </Form>
            )}
          </Formik>
          <Typography>
            <a href="#">رمز عبور را فراموش کردید؟</a>
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
};

export default Login;
