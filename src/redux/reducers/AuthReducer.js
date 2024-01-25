import {
  IS_USER_LOGGED_IN_REQUEST,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  SENDEMAIL_FAIL,
  SENDEMAIL_REQUEST,
  SENDEMAIL_SUCCESS,
  VERIFICATION_FAIL,
  VERIFICATION_REQUEST,
  VERIFICATION_SUCCESS,
  VERIFICATIONSTATUS_REQUEST,
  VERIFICATIONSTATUS_FAIL,
  VERIFICATIONSTATUS_SUCCESS
} from "../constants/AuthConstants";

const initialState = {
  token: null,
  user: {
    name: "",
    email: "",
  },
  authenticate: false,
  loading: false,
  entrance: false,
  userVerificationStatus: null,
  error: null,
  message: "",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
      };
    case IS_USER_LOGGED_IN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        message: action.payload.message,
        authenticate: true,
        entrance: true,
        loading: false,
      };

    case LOGIN_FAIL:
      return {
        ...state,
        authenticate: false,
        error: action.payload,
      };

    case LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT_SUCCESS: {
      return {
        ...initialState,
      };
    }
    case LOGOUT_FAIL: {
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    }

    case REGISTER_REQUEST:
      return {
        ...state,
      };
    case REGISTER_SUCCESS: 
      return{
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        message: action.payload.message,
        authenticate: true,
        loading: false,
      }
    case REGISTER_FAIL:
      return {
        ...state,
        authenticate: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const verificationReducer = (
  state = { verified: false, isSent: false },
  action
) => {
  switch (action.type) {
    case SENDEMAIL_REQUEST:
      return {
        ...state,
        isSent: false,
      };

    case SENDEMAIL_SUCCESS:
      return {
        ...state,
        isSent: true,
      };
    case SENDEMAIL_FAIL:
      return {
        ...state,
        isSent: false,
      };

    case VERIFICATION_REQUEST:
      return {
        ...state,
        verified: false,
      };
    case VERIFICATION_SUCCESS:
      return {
        ...state,
        verified: true,
        payload: action.payload
      };

    case VERIFICATION_FAIL:
      return {
        ...state,
        verified: true,
      };
    case VERIFICATIONSTATUS_REQUEST: 
      return{
        ...state,
        loading: true
      };
    case VERIFICATIONSTATUS_SUCCESS: 
      return{
        ...state,
        loading: false,
        userVerificationStatus: action.payload,
        error: null
      };
    case VERIFICATIONSTATUS_FAIL: 
      return{
        ...state,
        loading: false,
        userVerificationStatus: null,
        error: action.payload
      };

    default:
      return state;
  }
};
