import axios from "axios";
import {
  CREATE_INVOICE_FAIL,
  CREATE_INVOICE_REQUEST,
  CREATE_INVOICE_SUCCESS,
  GET_INVOICES_FAIL,
  GET_INVOICES_REQUEST,
  GET_INVOICES_SUCCESS,
  GET_INVOICE_BY_USER_ID_FAIL,
  GET_INVOICE_BY_USER_ID_REQUEST,
  GET_INVOICE_BY_USER_ID_SUCCESS,
} from "../constants/InvoiceConstants";

// ekleme
export const CreateInvoice = (invoice) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_INVOICE_REQUEST,
    });

    const { data } = await axios.post(
      `https://localhost:7032/api/Invoices/CreateInvoice`,
      invoice
    );
    if(data != null){
      const invoiceId = data.data.id;
      localStorage.setItem("invoiceId", invoiceId);
    }
    dispatch({
      type: CREATE_INVOICE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_INVOICE_FAIL,
      error: error.response,
    });
  }
};

export const GetInvoices = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_INVOICES_REQUEST,
    });

    const { data } = await axios.get(
      `https://localhost:7032/api/Invoices/GetInvoices`
    );
    dispatch({
      type: GET_INVOICES_SUCCESS,
      payload: {
        data,
      },
    });
  } catch (error) {
    dispatch({
      type: GET_INVOICES_FAIL,
      error: error.response,
    });
  }
};
export const GetByUserId = (userId) => async (dispatch) => {
  try {
    dispatch({
      type: GET_INVOICE_BY_USER_ID_REQUEST,
    });
    const { data } = await axios.get(
      `https://localhost:7032/api/Invoices/GetByUserId/${userId}`
    );
    dispatch({
      type: GET_INVOICE_BY_USER_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_INVOICE_BY_USER_ID_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};