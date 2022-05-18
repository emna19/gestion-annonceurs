import { configureStore } from "@reduxjs/toolkit";
import updateProfileReducer from "../reducers/users/updateProfileReducer";
import { UserReducer } from "../reducers/users/userAuthReducer";
import { combineReducers } from "redux";
import { userProfileReducer } from "../reducers/users/userProfileReducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig ={
  key : 'persist-key',
  storage
}


const reducer = combineReducers({
  userLogin : UserReducer ,// contains login & signup reducer 
  userProfile : userProfileReducer ,
  updateProfile : updateProfileReducer,
  
});

const persistedReducer = persistReducer(persistConfig,reducer)


// get user from local storage to save it
const userAuthFromStorage = localStorage.getItem("userAuth")
  ? JSON.parse(localStorage.getItem("userAuth"))
  : null;

// save user for login
const initialState = {
  userLogin: { userInfo: userAuthFromStorage },
};


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  initialState,
});

const persistor = persistStore(store)


export { store };
export {persistor};
