import styles from "./App.module.scss";
import { homeLoader } from "./util";

function App() {
	const { title } = homeLoader();

	return (
		<>
			<h1 className={styles["read-the-docs"]}>Hello World {title}</h1>
		</>
	);
}

export default App;
