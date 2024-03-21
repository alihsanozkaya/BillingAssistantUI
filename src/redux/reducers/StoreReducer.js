import {
  CREATE_STORE_FAIL,
  CREATE_STORE_REQUEST,
  CREATE_STORE_RESET,
  CREATE_STORE_SUCCESS,
  GET_STORES_REQUEST,
  GET_STORES_SUCCESS,
  GET_STORES_FAIL,
  GET_STORES_RESET,
} from "../constants/StoreConstants";

export const storeReducer = (
  state = {stores : []},
    action
) => {
  switch (action.type) {
    case CREATE_STORE_REQUEST:
      return { ...state, loading: true };

    case CREATE_STORE_SUCCESS:
      return {
        ...state,
        loading: false,
        isAdded: true,
        message: action.payload.message,
      };

    case CREATE_STORE_FAIL:
      return {
        ...state,
        loading: false,
        isAdded: false,
        error: action.payload,
      };

    case CREATE_STORE_RESET:
      return {
        ...state,
        isAdded: false,
      };
    case GET_STORES_REQUEST:
      return { ...state, loading: true };
    case GET_STORES_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        stores: action.payload.data,
      };
    case GET_STORES_FAIL:
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
