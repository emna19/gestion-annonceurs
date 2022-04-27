import axios from "axios";
import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../actionTypes";

/// create user action
// name,photo,email,password,organistaion,phone,country,city,codePostal,taxID,adress
const createUserAction = (user) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      });
      //Make
      const config = {
        "Content-Type": "application/json",
      };

      const { data } = await axios.post("/users", user, config);
      console.log(user);

      dispatch({
        //user register succeess
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });

      //save user into local storage
      localStorage.setItem("userAuthData", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: error.response && error.response.data.message,
      });
    }
  };
};

export { createUserAction };
