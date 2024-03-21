import axios from "axios";
import {
  CREATE_PRODUCT_FAIL,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
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
