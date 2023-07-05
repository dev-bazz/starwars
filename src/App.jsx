import { useLoaderData } from "react-router-dom";
import styles from "./App.module.scss";
import { Nav } from "./components";

function App() {
	console.log(useLoaderData());

	return (
		<>
			<section className={styles.hero}>
				<Nav />
				<h1>The Force Awakens</h1>
			</section>
		</>
	);
}

export default App;
