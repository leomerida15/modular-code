/** @format */
import { FC, useEffect } from "react";
import { createContainer } from "react-tracked";
import useValue from "./reducer";

export const {
	Provider,
	useTrackedState: useRouterSelectro,
	useUpdate: useRouterDispatch,
} = createContainer(useValue);

const RouterProvider: FC = ({ children }) => {
	return <Provider>{children}</Provider>;
};

export default RouterProvider;
