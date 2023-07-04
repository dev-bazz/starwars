import styles from "./App.module.scss";

const api = import.meta.env.VITE_API_URL;

export const loader = () => {
	return { title: "Vite + React", api };
};
function App() {
	console.log(api);

	return (
		<>
			<h1 className={styles["read-the-docs"]}>Hello World</h1>
		</>
	);
}

export default App;
