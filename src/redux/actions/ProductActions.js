import axios from "axios";
import {
  CREATE_PRODUCT_FAIL,
  CREATE_PRODUCT_OCR_FAIL,
  CREATE_PRODUCT_OCR_RESET,
  CREATE_PRODUCT_OCR_REQUEST,
  CREATE_PRODUCT_OCR_SUCCESS,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  GET_PRODUCT_BY_INVOICE_ID_REQUEST,
  GET_PRODUCT_BY_INVOICE_ID_SUCCESS,
  GET_PRODUCT_BY_INVOICE_ID_FAIL,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_BY_USER_ID_REQUEST,
  GET_PRODUCT_BY_USER_ID_SUCCESS,
  GET_PRODUCT_BY_USER_ID_FAIL
} from "../constants/ProductConstants";

// ekleme
export const CreateProduct = (product) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_PRODUCT_REQUEST,
    });
    const { data } = await axios.post(
      `https://localhost:7032/api/Products/CreateProduct`,
      product
    );
    dispatch({
      type: CREATE_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_PRODUCT_FAIL,
      error: error.response,
    });
  }
};
export const AddProductFromOCR = (file, invoiceId) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_PRODUCT_OCR_REQUEST,
    });

    const formData = new FormData();
    formData.append("file", file);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const response = await axios.post(
      `https://localhost:7032/api/Products/AddProductFromOCR?invoiceId=${invoiceId}`,
      formData,
      config
    );
    // localStorage.removeItem("invoiceId");
    dispatch({
      type: CREATE_PRODUCT_OCR_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_PRODUCT_OCR_FAIL,
      payload: error.response.data,
    });
  }
};

export const GetByInvoiceId = (invoiceId) => async (dispatch) => {
  try {
    dispatch({
      type: GET_PRODUCT_BY_INVOICE_ID_REQUEST,
    });
    const { data } = await axios.get(
      `https://localhost:7032/api/Products/GetByInvoiceId/${invoiceId}`
    );
    dispatch({
      type: GET_PRODUCT_BY_INVOICE_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_BY_INVOICE_ID_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};
export const GetProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_PRODUCTS_REQUEST,
    });
    const { data } = await axios.get(
      `https://localhost:7032/api/Products/GetProducts`
    );
    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: { data },
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_FAIL,
      error: error.response,
    });
  }
};
export const GetProductsByUserId = (userId) => async (dispatch) => {
  try {
    dispatch({
      type: GET_PRODUCT_BY_USER_ID_REQUEST,
    });
    const { data } = await axios.get(
      `https://localhost:7032/api/Products/GetProductsByUserId/${userId}`
    );
    dispatch({
      type: GET_PRODUCT_BY_USER_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_BY_USER_ID_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};