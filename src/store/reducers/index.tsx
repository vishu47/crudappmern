import { combineReducers } from "@reduxjs/toolkit";
import UserReducers from "../client/reducers/UserReducers";

const rootReducer = combineReducers({
  user: UserReducers,
});

export { rootReducer };
