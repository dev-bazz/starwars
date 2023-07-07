import { useRouteError } from "react-router-dom";

export function Errors() {
	const error = useRouteError();
	return (
		<div
			style={{
				textAlign: "center",
				marginTop: "30px",
				fontSize: "20px",
			}}>
			{" "}
			{error.message}
		</div>
	);
}
