// import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-end bg-login-bg ">
      <div className=" w-1/3 max-[376px]:w-2/3 max-[376px]:mx-2 mx-40 flex flex-col items-center justify-center bg-green-500 ">
        <label>name</label>
        <input type="text" />
        <input type="text" />
        <button>enter</button>
      </div>
    </div>
  );
};
export default Login;
