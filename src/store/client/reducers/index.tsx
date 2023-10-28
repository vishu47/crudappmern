import { combineReducers } from "@reduxjs/toolkit";
import UserReducers from "./UserReducers";

const ClientReducer = combineReducers({
  user: UserReducers,
});

export { ClientReducer };
