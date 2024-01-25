import axios from "axios";
import { ADD_ORDER_FAIL, ADD_ORDER_REQUEST, ADD_ORDER_SUCCESS } from "../constants/OrderConstants";

// ekleme
export const AddOrder = (order) => async (dispatch) => {
    try {
      dispatch({
        type: ADD_ORDER_REQUEST,
      });
  
      const { data } = await axios.post(
        `https://localhost:7032/api/Orders/CreateOrder`,
        order
      );
  
      dispatch({
        type: ADD_ORDER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADD_ORDER_FAIL,
        error: error.response,
      });
    }
  };