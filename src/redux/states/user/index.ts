/** @format */

import { createSlice } from "@reduxjs/toolkit";
import userReducers from "./user.reducers";
import UserState from "./user.state";

export const userSlice = createSlice({
	name: "user",
	initialState: UserState,
	reducers: userReducers,
});

export const { createUser, modifyUser } = userSlice.actions;

export default userSlice.reducer;
