/** @format */

import user from "@/redux/states/user";
import { AppStore } from "@/redux/store";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore<AppStore>({
	reducer: {
		user,
	},
});

export default store;
