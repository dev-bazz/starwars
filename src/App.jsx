import { useLoaderData } from "react-router-dom";
import styles from "./App.module.scss";

function App() {
	const { title } = useLoaderData();

	return (
		<>
			<h1 className={styles["read-the-docs"]}>Hello World {title}</h1>
		</>
	);
}

export default App;
