import {
  IS_USER_LOGGED_IN_REQUEST,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  VERIFICATION_REQUEST,
  VERIFICATION_SUCCESS,
  VERIFICATION_FAIL,
  SENDEMAIL_REQUEST,
  SENDEMAIL_SUCCESS,
  SENDEMAIL_FAIL,
  VERIFICATIONSTATUS_REQUEST,
  VERIFICATIONSTATUS_SUCCESS,
  VERIFICATIONSTATUS_FAIL
} from "../constants/AuthConstants";
import axios from "axios";
// giriş yapma
export const Login = (user) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const res = await axios.post(`https://localhost:7032/api/Auths/login`, {
      ...user,
    });

    if (res.status >= 200 && res.status <= 205) {
      const { token, user, message } = res.data;
      dispatch(getUserVerificationStatus(user.email));
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
      dispatch({ type: LOGIN_FAIL, payload: res.data.message || "Giriş başarısız. Sunucu hatası." });
    }
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response ? error.response.data : "Giriş hatası. Ayrıntılar için konsolu kontrol edin.",
    });
  }
};

export const register = (user) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST });
   const res = await axios.post("https://localhost:7032/api/Auths/register", user);

    // Success
    if (res.status >= 200 && res.status <= 205) {
      const { token, user, message } = res.data;
      dispatch({
        type: REGISTER_SUCCESS,
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
      payload: error.response ? error.response.data : "Kayıt hatası. Ayrıntılar için konsolu kontrol edin.",
    });
  }
};

export const getUserVerificationStatus = (email) => async (dispatch) => {
  try {
    dispatch({ type: VERIFICATIONSTATUS_REQUEST });
    const res = await axios.get(`https://localhost:7032/api/Auths/verificationStatus?email=${email}`);

    if (res.status >= 200 && res.status <= 205) {
      const { verified, message } = res.data;

      dispatch({
        type: VERIFICATIONSTATUS_SUCCESS,
        payload: {
          userVerificationStatus: verified,
          message,
        },
      });

      return { userVerificationStatus: verified, message };
    } else {
      console.error("getUserVerificationStatus unexpected response:", res.status, res.data);
      dispatch({
        type: VERIFICATIONSTATUS_FAIL,
        payload: { error: "Beklenmeyen sunucu yanıtı" },
      });
    }
  } catch (error) {
    console.error("getUserVerificationStatus error:", error);

    dispatch({
      type: VERIFICATIONSTATUS_FAIL,
      payload: error.response ? error.response.data : { error: "Ağ hatası" },
    });
    return null;
  }
};
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

export const logout = () => async (dispatch) => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");

  dispatch({ type: LOGOUT_SUCCESS });
};

export const sendEmail = (email) => async (dispatch) => {
  try {
    dispatch({
      type: SENDEMAIL_REQUEST,
    });

    const { data } = await axios.get(
      `https://localhost:7032/api/Auths/sendEmailAsync?email=${email}`
    );
    dispatch({
      type: SENDEMAIL_SUCCESS,
      payload: {
        data,
      },
    });
  } catch (error) {
    dispatch({
      type: SENDEMAIL_FAIL,
      error: error.response,
    });
  }
};
export const verification = (user) => async (dispatch) => {
  try {
    dispatch({ type: VERIFICATION_REQUEST });

    const res = await axios.put(
      "https://localhost:7032/api/Auths/verification",
      user
    );

    // Success
    if (res.status >= 200 && res.status <= 205) {
      const { email, verified } = res.data;

      dispatch({
        type: VERIFICATION_SUCCESS,
        payload: {
          email,
          verified,
        },
      });
    }
  } catch (error) {
    dispatch({
      type: VERIFICATION_FAIL,
      payload: error.response.data,
    });
  }
};