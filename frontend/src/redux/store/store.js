import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";
// import thunk from "redux-thunk";
import { createUserReducer } from "../reducers/users/createUserReducer";

// const middlewares = [thunk];

const reducer = combineReducers({
  userSignUp: createUserReducer,
});

// get user from local storage to save it
const userAuthFromStorage = localStorage.getItem("userAuth")
  ? JSON.parse(localStorage.getItem("userAuth"))
  : null;

// save user for login
const initialState = {
  userLogin: { userInfo: userAuthFromStorage },
};
// console.log(initialState.userLogin.userInfo);
const store = configureStore({
  reducer,
  initialState,
});
export { store };
