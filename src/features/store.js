import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import user from "./userSlice";

// Le store permet de stocker tous les state de l'application et les rendre accessible par tous les composants.

const reducer = combineReducers({
  user,
});

const store = configureStore({
  reducer,
});

export default store;
