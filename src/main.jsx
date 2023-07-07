import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Errors, Result } from "./components";
import { QueryClientProvider, QueryClient } from "react-query";
const routes = createBrowserRouter(
	[
		{
			path: "/",
			element: <App />,

			children: [
				{
					index: true,
					element: <Result />,
					errorElement: <Errors />,
					// loader: ({ request }) => homeLoader(request),
				},
			],
		},
	],
	{ basename: import.meta.env.DEV ? "/" : "/starwars/" }
);

const queryClient = new QueryClient();

// ,

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={routes} />
		</QueryClientProvider>
	</React.StrictMode>
);
