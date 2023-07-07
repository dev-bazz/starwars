import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { homeLoader } from "./util";
import { Errors, Result } from "./components";

const routes = createBrowserRouter([
	{
		path: "/",
		element: <App />,

		children: [
			{
				index: true,
				element: <Result />,
				errorElement: <Errors />,
				loader: ({ request }) => homeLoader(request),
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={routes} />
	</React.StrictMode>
);
