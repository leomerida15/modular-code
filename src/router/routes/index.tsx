/** @format */

import React from "react";
import { useRoutes } from "react-router-dom";

const Routes = () => {
	const RoutesCreate = useRoutes([
		{
			path: "/",
			element: <h1>Hola</h1>,
		},
	]);

	return RoutesCreate;
};

export default Routes;
