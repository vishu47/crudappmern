import { createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../services/UserService";

export const ActionGetTheUserDetails: any = createAsyncThunk(
  "UserReducer/ActionGetTheUserDetails",
  // naming convention (reducer/action_name)
  async (obj: any) => {
    const res = await UserService.GetUserData(obj);
    return res.data;
  }
);

export const ActionGetUsersName: any = createAsyncThunk(
  "UserReducer/ActionGetUsersName",
  // naming convention (reducer/action_name)
  async (obj: any) => {
    const res = await UserService.GetUserName();
    return res.data;
  }
);

export const ActionSubmitData: any = createAsyncThunk(
  "UserReducer/ActionSubmitData",
  // naming convention (reducer/action_name)
  async (obj: any) => {
    const res = await UserService.SubmitData(obj);
    return res.data;
  }
);

export const ActionEditData: any = createAsyncThunk(
  "UserReducer/ActionEditData",
  // naming convention (reducer/action_name)
  async (obj: any) => {
    const res = await UserService.EditData(obj);
    return res.data;
  }
);

export const ActionDeleteUser: any = createAsyncThunk(
  "UserReducer/ActionDeleteUser",
  // naming convention (reducer/action_name)
  async (obj: any) => {
    const res = await UserService.DeleteUser(obj);
    return res.data;
  }
);
