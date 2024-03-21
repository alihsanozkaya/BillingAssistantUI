import axios from "axios";
import {
  CREATE_STORE_FAIL,
  CREATE_STORE_REQUEST,
  CREATE_STORE_SUCCESS,
  GET_STORES_FAIL,
  GET_STORES_REQUEST,
  GET_STORES_SUCCESS,
} from "../constants/StoreConstants";

// ekleme
export const CreateStore = (store) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_STORE_REQUEST,
    });

    const { data } = await axios.post(
      `https://localhost:7032/api/Stores/CreateStore`,
      store
    );

    dispatch({
      type: CREATE_STORE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_STORE_FAIL,
      error: error.response,
    });
  }
};

export const GetStores = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_STORES_REQUEST,
    });

    const { data } = await axios.get(
      `https://localhost:7032/api/Stores/GetStores`
    );
    dispatch({
      type: GET_STORES_SUCCESS,
      payload: {data,},
    });
  } catch (error) {
    dispatch({
      type: GET_STORES_FAIL,
      error: error.response,
    });
  }
};