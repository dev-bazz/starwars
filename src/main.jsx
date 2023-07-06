import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useHomeLoader } from "./util";
import { Result } from "./components";

const routes = createBrowserRouter([
	{
		path: "/",
		element: <App />,

		children: [
			{
				index: true,
				element: <Result />,
				errorElement: <div>Error | Error</div>,
				loader: useHomeLoader,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={routes} />
	</React.StrictMode>
);
