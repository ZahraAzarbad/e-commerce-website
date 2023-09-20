import { createSlice } from "@reduxjs/toolkit";
// import { userAuth } from "./userThunk";

import Cookies from "js-cookie";

const initialState = {
  isLoading: false,
  message: "",
  name: "",
  lastName: "",
  userName: "",

  address: "",
  phoneNumber: "",
  role: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      // eslint-disable-next-line no-unused-vars
      state = initialState;
      // Cookies.remove(ACCESS_TOKEN_KEY, { path: "/auth" });
      // Cookies.remove(REFRESH_TOKEN_KEY, { path: "/auth" });
    },

    addUser: (state, { payload }) => {
      state.isLoading = false;
      const {
        firstname,
        lastname,
        username,
        phoneNumber,
        address,

        role,
      } = payload.data.user;
      state.message = "شما با موفقیت وارد شدید";
      state.name = firstname;
      state.lastName = lastname;
      state.userName = username;
      state.phoneNumber = phoneNumber;
      state.address = address;
      state.role = role;

      // set accessToken and refreshToken on cookies
      Cookies.set("accessToken", payload.token.accessToken);
      Cookies.set("refreshToken", payload.token.refreshToken);
    },

    editUser: (state, { payload }) => {
      const {
        firstname,

        lastname,
        username,
        phoneNumber,
        address,
        role,
      } = payload.data.user;
      state.name = firstname;
      state.lastName = lastname;
      state.userName = username;
      state.phoneNumber = phoneNumber;
      state.address = address;
      state.role = role;
    },
  },
});

export const { logout, addUser, editUser } = userSlice.actions;
export default userSlice.reducer;
