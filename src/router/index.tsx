/** @format */

import { FC } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import RouterProvider from "./context";
import Routes from "./routes";

const Router: FC = ({ children }) => {
	return (
		<RouterProvider>
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</RouterProvider>
	);
};
