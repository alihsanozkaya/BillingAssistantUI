import {
  CREATE_ORDER_FAIL,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_RESET,
  CREATE_ORDER_SUCCESS,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAIL,
  GET_ORDERS_RESET,
} from "../constants/OrderConstants";

export const orderReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return { ...state, loading: true };

    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAdded: true,
        message: action.payload.message,
      };

    case CREATE_ORDER_FAIL:
      return {
        ...state,
        loading: false,
        isAdded: false,
        error: action.payload,
      };

    case CREATE_ORDER_RESET:
      return {
        ...state,
        isAdded: false,
      };
      case GET_ORDERS_REQUEST:
        return { ...state, loading: true };
      case GET_ORDERS_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          orders: action.payload.data,
        };
      case GET_ORDERS_FAIL:
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload,
        };
    default:
      return state;
  }
};
