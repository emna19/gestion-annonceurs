import axios from "axios";
import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../actionTypes";

/// create user action

const createUserAction = (userData) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      });

      const config = {
        "Content-Type": "application/json",
      };

      const { data } = await axios.post("/users", userData, config);

      dispatch({    //user register succeess
        type: USER_REGISTER_SUCCESS, 
        payload: data,
      });
    } catch (error) {
      dispatch({     //user register fail
        type: USER_REGISTER_FAIL, 
        payload: error.response && error.response.data.message,
      });
    }
  };
};

export {createUserAction} ; 
