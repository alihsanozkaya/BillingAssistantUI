import axios from "axios";
import {  PAY_SUBSCRIPTION_FAIL, PAY_SUBSCRIPTION_REQUEST, PAY_SUBSCRIPTION_SUCCESS } from "../constants/PaymentConstants";

export const PaySubscription = (totalAmount) => async (dispatch) => {
    try {
      dispatch({
        type: PAY_SUBSCRIPTION_REQUEST,
      });
  
      const { data } = await axios.post(
        `https://localhost:7032/api/Payments?totalAmount=${totalAmount}`
      );
  
      dispatch({
        type: PAY_SUBSCRIPTION_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PAY_SUBSCRIPTION_FAIL,
        error: error.response,
      });
    }
  };