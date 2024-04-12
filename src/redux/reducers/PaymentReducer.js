import { PAY_SUBSCRIPTION_FAIL, PAY_SUBSCRIPTION_REQUEST, PAY_SUBSCRIPTION_SUCCESS } from "../constants/PaymentConstants";


export const paySubscriptionReducer = (
    state = {
      message: "",
    },
    action
  ) => {
    switch (action.type) {
      case PAY_SUBSCRIPTION_REQUEST:
        return { ...state, loading: true };
  
      case PAY_SUBSCRIPTION_SUCCESS:
        return {
          ...state,
          loading: false,
          isPayed: true,
          message: action.payload.message,
        };
  
      case PAY_SUBSCRIPTION_FAIL:
        return {
          ...state,
          loading: false,
          isPayed: false,
          error: action.payload,
        };
     
      default:
        return state;
    }
  };