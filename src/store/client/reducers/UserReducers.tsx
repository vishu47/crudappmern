import { createSlice } from "@reduxjs/toolkit";
import {
  ActionDeleteUser,
  ActionEditData,
  ActionGetTheUserDetails,
  ActionGetUsersName,
  ActionSubmitData,
} from "../actions/UserAction";
import { toast } from "react-toastify";

interface Initials {
  loading: boolean;
  userList: any;
  nameList: any;
  nameListStatus: boolean;
}

const initialState: Initials = {
  loading: false,
  userList: [],
  nameList: [],
  nameListStatus: false,
};

const UserLogin = createSlice({
  name: "UserLogin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // *************** get cutomer details *************
    builder
      // initialize request
      .addCase(ActionGetTheUserDetails.pending, (state: any) => {
        state.loading = true;
      })
      // have any response from api with status code 200
      .addCase(ActionGetTheUserDetails.fulfilled, (state: any, action: any) => {
        // console.log(action?.payload?.res);
        if (action?.payload?.res) {
          state.userList = action?.payload?.res;
          state.count = action?.payload?.count;
        } else {
          toast("Something Wend wrong or Internet issue!");
          state.loading = false;
        }
      })
      // not have any response from api
      .addCase(ActionGetTheUserDetails.rejected, (state: any, action: any) => {
        state.loading = false;
        console.log("something went wrong! or NetworkError");
      });
    // *************** get list of name *************
    builder
      // initialize request
      .addCase(ActionGetUsersName.pending, (state: any) => {
        state.nameListStatus = true;
      })
      // have any response from api with status code 200
      .addCase(ActionGetUsersName.fulfilled, (state: any, action: any) => {
        console.log(action?.payload?.res);
        if (action?.payload?.res) {
          state.nameList = action?.payload?.res;
        } else {
          toast("Something Wend wrong or Internet issue!");
          state.nameListStatus = false;
        }
      })
      // not have any response from api
      .addCase(ActionGetUsersName.rejected, (state: any, action: any) => {
        state.nameListStatus = false;
        console.log("something went wrong! or NetworkError");
      });
    // *************** submit form data *************
    builder
      // initialize request
      .addCase(ActionSubmitData.pending, (state: any) => {
        state.loading = true;
      })
      // have any response from api with status code 200
      .addCase(ActionSubmitData.fulfilled, (state: any, action: any) => {
        console.log(action?.payload?.res, "ActionSubmitData");
        if (action?.payload?.res) {
          toast("Data Submitted successfully!");
        } else {
          toast("something went wrong! or NetworkError");
        }
      })
      // not have any response from api
      .addCase(ActionSubmitData.rejected, (state: any, action: any) => {
        state.loading = false;
        console.log("something went wrong! or NetworkError");
      });
    // *************** user delete *************
    builder
      // initialize request
      .addCase(ActionDeleteUser.pending, (state: any) => {
        state.loading = true;
      })
      // have any response from api with status code 200
      .addCase(ActionDeleteUser.fulfilled, (state: any, action: any) => {
        console.log(action?.payload?.res, "ActionDeleteUser");
        if (action?.payload?.res) {
          toast("Deleted user successfully!");
        } else {
          toast("something went wrong! or NetworkError");
        }
      })
      // not have any response from api
      .addCase(ActionDeleteUser.rejected, (state: any, action: any) => {
        state.loading = false;
        console.log("something went wrong! or NetworkError");
      });
    // *************** user edit *************
    builder
      // initialize request
      .addCase(ActionEditData.pending, (state: any) => {
        state.loading = true;
      })
      // have any response from api with status code 200
      .addCase(ActionEditData.fulfilled, (state: any, action: any) => {
        console.log(action?.payload?.res, "ActionEditData");
        if (action?.payload?.res) {
          toast("Edited user successfully!");
        } else {
          toast("something went wrong! or NetworkError");
        }
      })
      // not have any response from api
      .addCase(ActionEditData.rejected, (state: any, action: any) => {
        state.loading = false;
        console.log("something went wrong! or NetworkError");
      });
  },
});

export default UserLogin.reducer;
