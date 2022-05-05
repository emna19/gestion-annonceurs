import axios from "axios";
import {
  USER_LOGIN_REQUEST,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
  USER_UPDATE_REQUEST,
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

      const { data } = await axios.post(
        "http://localhost:5000/users",
        user,
        config
      );

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
        "http://localhost:5000/users/login",
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

////Profile Action
const userProfileAction = () => {
  return async (dispatch, getState) => {
    //get user token from store
    const { userInfo } = getState().userLogin;

    try {
      //get profile request
      dispatch({
        type: USER_PROFILE_REQUEST,
      });

      //set header auth
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      //making request to endpoint
      const { data } = await axios.get(
        "http://localhost:5000/users/profile",
        config
      );

      //request profile success
      dispatch({
        type: USER_PROFILE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      //request profile fail
      dispatch({
        type: USER_PROFILE_FAIL,
        payload: error.message,
      });
    }
  };
};

//// Update Profile Action
const updateProfileAction = (
  name,
  email,
  password,
  organisation,
  phone,
  country,
  city,
  codePostal,
  taxID,
  adress,
  state
  // photo
) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: USER_UPDATE_REQUEST,
      });

      //get user token from store
      const { userInfo } = getState().userLogin;
      //set header auth
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        "http://localhost:5000/users/update",
        {
          name,
          email,
          password,
          organisation,
          phone,
          country,
          city,
          codePostal,
          taxID,
          adress,
          state,
          // photo
        },
        config
      );
      //request  success
      dispatch({
        type: USER_PROFILE_SUCCESS,
        payload: data,
      });

      //save user into local storage
      localStorage.setItem("userAuth", JSON.stringify(data));
    } catch (error) {
      //request  fail
      dispatch({
        type: USER_PROFILE_FAIL,
        payload: error.message,
      });
    }
  };
};

export {
  createUserAction,
  loginUserAction,
  userProfileAction,
  updateProfileAction,
};
