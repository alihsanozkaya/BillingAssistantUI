import axios from "axios";
import {
  CREATE_CATEGORY_FAIL,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  GET_CATEGORIES_FAIL,
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
} from "../constants/CategoryConstants";

// ekleme
export const CreateCategory = (category) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_CATEGORY_REQUEST,
    });

    const { data } = await axios.post(
      `https://localhost:7032/api/Categories/CreateCategory`,
      category
    );

    dispatch({
      type: CREATE_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_CATEGORY_FAIL,
      error: error.response,
    });
  }
};

export const GetCategories = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_CATEGORIES_REQUEST,
    });

    const { data } = await axios.get(
      `https://localhost:7032/api/Categories/GetCategories`
    );
    dispatch({
      type: GET_CATEGORIES_SUCCESS,
      payload: {data,},
    });
  } catch (error) {
    dispatch({
      type: GET_CATEGORIES_FAIL,
      error: error.response,
    });
  }
};