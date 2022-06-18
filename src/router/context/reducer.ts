/** @format */

import { useReducer } from "react";
import { Action, StateRouter, typesRouter } from "../types";

const initialState: StateRouter = {
	to: "",
	from: "",
};

const reducer = (state: StateRouter, action: Action): StateRouter => {
	//
	if (action.type === typesRouter.AuthDefined) {
		return Object.assign(state, action.data);
	}

	return state;
};

const useValue = () => useReducer(reducer, initialState);

export default useValue;
