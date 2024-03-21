import axios from "axios";
import {
  CREATE_ORDER_FAIL,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_ORDERS_FAIL,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
} from "../constants/OrderConstants";

// ekleme
export const CreateOrder = (order) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_ORDER_REQUEST,
    });

    const { data } = await axios.post(
      `https://localhost:7032/api/Orders/CreateOrder`,
      order
    );

    dispatch({
      type: CREATE_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_ORDER_FAIL,
      error: error.response,
    });
  }
};

export const GetOrders = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ORDERS_REQUEST,
    });

    const { data } = await axios.get(
      `https://localhost:7032/api/Orders/GetOrders`
    );
    dispatch({
      type: GET_ORDERS_SUCCESS,
      payload: {
        data,
      },
    });
  } catch (error) {
    dispatch({
      type: GET_ORDERS_FAIL,
      error: error.response,
    });
  }
};