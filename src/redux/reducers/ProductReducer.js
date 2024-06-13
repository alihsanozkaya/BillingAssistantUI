import {
  CREATE_PRODUCT_FAIL,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_RESET,
  CREATE_PRODUCT_SUCCESS,
  GET_PRODUCT_BY_INVOICE_ID_REQUEST,
  GET_PRODUCT_BY_INVOICE_ID_SUCCESS,
  GET_PRODUCT_BY_INVOICE_ID_FAIL,
  GET_PRODUCT_BY_INVOICE_ID_RESET,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  CREATE_PRODUCT_OCR_RESET,
  CREATE_PRODUCT_OCR_REQUEST,
  CREATE_PRODUCT_OCR_SUCCESS,
  CREATE_PRODUCT_OCR_FAIL,
  GET_PRODUCT_BY_USER_ID_REQUEST,
  GET_PRODUCT_BY_USER_ID_SUCCESS,
  GET_PRODUCT_BY_USER_ID_FAIL,
  GET_PRODUCT_BY_USER_ID_RESET
} from "../constants/ProductConstants";

export const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case CREATE_PRODUCT_REQUEST:
      return { ...state, loading: true };

    case CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        isAdded: true,
        message: action.payload.message,
      };
    case CREATE_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        isAdded: false,
        error: action.payload,
      };
    case CREATE_PRODUCT_RESET:
      return {
        ...state,
        isAdded: false,
      };
    case CREATE_PRODUCT_OCR_RESET:
      return {
        ...state,
        isAdded: false,
      };
    case GET_PRODUCTS_REQUEST:
      return { ...state, loading: true };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        products: action.payload.data,
      };
    case GET_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };      
      case GET_PRODUCT_BY_INVOICE_ID_REQUEST:
        return { ...state, loading: true };
      case GET_PRODUCT_BY_INVOICE_ID_SUCCESS:
        return {
          ...state,
          loading: false,
          products: action.payload,
        };
      case GET_PRODUCT_BY_INVOICE_ID_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case GET_PRODUCT_BY_INVOICE_ID_RESET:
        return { products: [] };
        case GET_PRODUCT_BY_USER_ID_REQUEST:
          return { ...state, loading: true, success: false };
        case GET_PRODUCT_BY_USER_ID_SUCCESS:
          return {
            ...state,
            loading: false,
            products: action.payload,
            success: true 
          };
        case GET_PRODUCT_BY_USER_ID_FAIL:
          return {
            ...state,
            loading: false,
            error: action.payload,
            success : false
          };
        case GET_PRODUCT_BY_USER_ID_RESET:
          return { products: [] };
    default:
      return state;
  }
};

export const productOcrReducer = (state = { file: {} }, action) => {
  switch (action.type) {
    case CREATE_PRODUCT_OCR_REQUEST:
      return { ...state, loading: true };

    case CREATE_PRODUCT_OCR_SUCCESS:
      return {
        ...state,
        loading: false,
        isAdded: true,
        file: action.payload.data,
        message: action.payload.message,
      };

    case CREATE_PRODUCT_OCR_FAIL:
      return {
        ...state,
        loading: false,
        isAdded: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
