import {
  IS_USER_LOGGED_IN_REQUEST,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_REQUEST,
} from "../constants/AuthConstants";
import axios from "axios";
// giriş yapma
export const Login = (user) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const res = await axios.post(`https://localhost:7231/api/Auths/login`, {
      ...user,
    });

    // Success
    if (res.status >= 200 && res.status <= 205) {
      const { token, user, message } = res.data;
      localStorage.setItem("token", token);

      localStorage.setItem("user", JSON.stringify(user));
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          token,
          user,
          message,
        },
      });
    } else {
      dispatch({ type: LOGIN_FAIL });
    }
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,

      payload: error.response.data,
    });
  }
};
// kayıt olma
export const register = (user) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST });

    const res = await axios.post(
      "https://localhost:7231/api/Auths/register",
      user
    );

    // Success
    if (res.status >= 200 && res.status <= 205) {
      const { token, user, message } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          token,
          user,
          message,
        },
      });
    }
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data,
    });
  }
};

// sayfa yenilendiğinde dahi kullanıcı girişlerini sifırlamayı önler
export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    dispatch({
      type: IS_USER_LOGGED_IN_REQUEST,
    });
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispatch({
        type: LOGIN_FAIL,
        payload: "",
      });
    }
  };
};

// Logout
export const logout = () => async (dispatch) => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");

  dispatch({ type: LOGOUT_SUCCESS });
};
