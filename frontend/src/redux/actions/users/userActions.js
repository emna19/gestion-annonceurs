import axios from "axios";
import {
  USER_LOGIN_REQUEST,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
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
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post("/users", user, config);

      dispatch({
        //user register succeess
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });

      //save user into local storage
      localStorage.setItem("userAuth", JSON.stringify(data));

    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: error,
      });
    }
  };
};

/// user login Action
const loginUserAction = (email, password) => {
  return async (dispatch) => {
    try {
      //login request
      dispatch({
        type: USER_LOGIN_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/users/login",
        { email, password },
        config
      );

      //login success
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });

       //save user into local storage
       localStorage.setItem("userAuth", JSON.stringify(data));

    } catch (error) {
      //login fail
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: error,
      });
    }
  };
};

export { createUserAction, loginUserAction };
