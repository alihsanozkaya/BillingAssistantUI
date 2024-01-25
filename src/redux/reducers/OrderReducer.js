import { ADD_ORDER_FAIL, ADD_ORDER_REQUEST, ADD_ORDER_RESET, ADD_ORDER_SUCCESS } from "../constants/OrderConstants";

export const addOrderReducer = (
    state = { message : ""},
    action
  ) => {
    switch (action.type) {
      case ADD_ORDER_REQUEST:
        return { ...state, loading: true };
  
      case ADD_ORDER_SUCCESS:
        return {
          ...state,
          loading: false,
          isAdded: true,
          message : action.payload.message
        };
  
      case ADD_ORDER_FAIL:
        return {
          ...state,
          loading: false,
          isAdded: false,
          error: action.payload,
        };
  
      case ADD_ORDER_RESET:
        return {
          ...state,
          isAdded: false,
        };
      default:
        return state;
    }
  };
