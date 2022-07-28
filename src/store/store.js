import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../slice/singUpSlice";
import authentication from "../slice/authenticationSlice";
import login from "../slice/loginSlice";
import userReources from "../slice/adminSlice";
import colors from "../slice/colors";
import palettes from "../slice/palettes";
import config from "../slice/config";
import navigation from "../slice/navigation";

export const store = configureStore({
  reducer: {
    register: loginSlice,
    authentication,
    login,
    fetchUser: userReources,
    colors,
    palettes,
    config,
    navigation,
  },
});
