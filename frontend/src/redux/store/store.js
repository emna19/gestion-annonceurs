import { configureStore } from "@reduxjs/toolkit";
import updateProfileReducer from "../reducers/users/updateProfileReducer";
import { UserReducer } from "../reducers/users/userAuthReducer";
import { userProfileReducer } from "../reducers/users/userProfileReducer";


const reducer = {
  userLogin : UserReducer ,// contains login & signup reducer 
  userProfile : userProfileReducer ,
  updateProfile : updateProfileReducer,
  
};

// get user from local storage to save it
const userAuthFromStorage = localStorage.getItem("userAuth")
  ? JSON.parse(localStorage.getItem("userAuth"))
  : null;

// save user for login
const initialState = {
  userLogin: { userInfo: userAuthFromStorage },
};
const store = configureStore({
  reducer,
  initialState,
});
export { store };
