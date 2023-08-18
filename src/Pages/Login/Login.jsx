// helperText={
//   <ErrorMessage className="text-red" name="password" />
// }
import { Grid, Paper, TextField, Button, Avatar } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Login = ({ handleChange }) => {
  const navigate = useNavigate();

  const paperStyle = {
    padding: "40px 20px",
    height: "520px",
    width: 350,
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    flexDirection: "column",
  };
  const form = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "20px",
    background: "transparent",
  };
  const avatarStyle = {
    height: "150px",
    width: "150px",
  };
  const btnstyle = { margin: "8px 0" };

  const initialValues = {
    username: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .oneOf([Yup.ref("username")], "no match")
      .required("نام کاربری الزامی است"),
    password: Yup.string()
      .min(6, "رمز باید حداقل دارای 6 کاراکتر باشد")
      .required("رمز الزامی است"),
  });
  const onSubmit = (values, props) => {
    if (values.username !== "admin" && values.password !== "admin1234") {
      setTimeout(() => {
        props.resetForm();
        props.setSubmitting(false);
      }, 20);
      toast.error("نام کاربری یا رمز عبور اشتباه است");
    }
    axios
      .post("http://localhost:8000/api/auth/login", values)
      .then((response) => {
        console.log(response);
        if (
          response.status === 200 &&
          response.data.data.user.role === "ADMIN"
        ) {
          const token = response.data.token;
          Cookies.set("accessToken", token.accessToken);
          Cookies.set("refreshToken", token.refreshToken);
          navigate("/orders/inprogress");
        } else {
        }
      });
  };

  return (
    <div className="h-screen flex items-center justify-center bg-login-bg relative">
      <div className="absolute top-3 left-3 bg-orange-600 text-white rounded-md">
        <Button
          sx={{
            fontSize: "14px",
            padding: "5px 15px",
          }}
        >
          <ArrowBackIcon sx={{ mr: "10px" }} />
          <Link to="/">بازگشت به سایت</Link>
        </Button>
      </div>

      <Grid sx={{ background: "transparent" }}>
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
              <Form style={form} dir="rtl">
                <Field
                  as={TextField}
                  label="نام کاربری"
                  name="username"
                  placeholder="نام کاربری را وارد کنید "
                  fullWidth
                  required
                  error={
                    props.touched.username && props.errors.username
                      ? true
                      : false
                  }
                  helperText={
                    props.touched.username && props.errors.username
                      ? props.errors.username
                      : ""
                  }
                />

                <Field
                  as={TextField}
                  label="رمز"
                  name="password"
                  placeholder=" رمز را وارد کنید"
                  type="password"
                  fullWidth
                  required
                  error={
                    props.touched.password && props.errors.password
                      ? true
                      : false
                  }
                  helperText={
                    props.touched.password && props.errors.password
                      ? props.errors.password
                      : ""
                  }
                />
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  style={btnstyle}
                  fullWidth
                >
                  ورود
                </Button>
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
      <ToastContainer />
    </div>
  );
};

export default Login;
