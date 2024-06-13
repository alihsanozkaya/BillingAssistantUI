import {
  CREATE_INVOICE_FAIL,
  CREATE_INVOICE_REQUEST,
  CREATE_INVOICE_RESET,
  CREATE_INVOICE_SUCCESS,
  GET_INVOICES_REQUEST,
  GET_INVOICES_SUCCESS,
  GET_INVOICES_FAIL,
  GET_INVOICES_RESET,
  GET_INVOICE_BY_USER_ID_REQUEST,
  GET_INVOICE_BY_USER_ID_SUCCESS,
  GET_INVOICE_BY_USER_ID_FAIL,
  GET_INVOICE_BY_USER_ID_RESET
} from "../constants/InvoiceConstants";

export const invoiceReducer = (state = { invoices: [] }, action) => {
  switch (action.type) {
    case CREATE_INVOICE_REQUEST:
      return { ...state, loading: true };

    case CREATE_INVOICE_SUCCESS:
      return {
        ...state,
        loading: false,
        isAdded: true,
        message: action.payload.message,
      };

    case CREATE_INVOICE_FAIL:
      return {
        ...state,
        loading: false,
        isAdded: false,
        error: action.payload,
      };

    case CREATE_INVOICE_RESET:
      return {
        ...state,
        isAdded: false,
      };
      case GET_INVOICES_REQUEST:
        return { ...state, loading: true };
      case GET_INVOICES_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          invoices: action.payload,
        };
      case GET_INVOICES_FAIL:
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload,
        };
        case GET_INVOICE_BY_USER_ID_REQUEST:
        return { ...state, loading: true, success: false };
      case GET_INVOICE_BY_USER_ID_SUCCESS:
        return {
          ...state,
          loading: false,
          invoices: action.payload,
          success: true 
        };
      case GET_INVOICE_BY_USER_ID_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
          success : false
        };
      case GET_INVOICE_BY_USER_ID_RESET:
        return { invoices: [] };
    default:
      return state;
  }
};
