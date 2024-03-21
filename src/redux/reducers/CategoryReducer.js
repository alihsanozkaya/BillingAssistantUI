import {
  CREATE_CATEGORY_FAIL,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_RESET,
  CREATE_CATEGORY_SUCCESS,
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAIL,
  GET_CATEGORIES_RESET,
} from "../constants/CategoryConstants";

export const categoryReducer = (
  state = {categories : []},
    action
) => {
  switch (action.type) {
    case CREATE_CATEGORY_REQUEST:
      return { ...state, loading: true };

    case CREATE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        isAdded: true,
        message: action.payload.message,
      };

    case CREATE_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        isAdded: false,
        error: action.payload,
      };

    case CREATE_CATEGORY_RESET:
      return {
        ...state,
        isAdded: false,
      };
    case GET_CATEGORIES_REQUEST:
      return { ...state, loading: true };
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
       
        categories: action.payload.data,
      };
    case GET_CATEGORIES_FAIL:
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
