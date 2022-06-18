/** @format */

const userReducers = {
	createUser: (state: any, action: { payload: any }) => action.payload,
	modifyUser: (state: any, action: { payload: any }) => ({ ...state, ...action.payload }),
};

export default userReducers;
