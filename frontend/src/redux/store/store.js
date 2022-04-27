import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { createUserReducer } from "../reducers/users/createUserReducer";

const middlewares = [thunk];

const reducer = combineReducers({
  userSignUp: createUserReducer,
});



const store = configureStore({
     reducer ,
    //  composeWithDevTools(applyMiddleware(...middlewares)),
    }
)
export {store} ; 