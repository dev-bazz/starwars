import { useLoaderData } from "react-router-dom";
import styles from "./App.module.scss";
import { Nav } from "./components";
import image from "./assets/hero-image-starwar.webp";

function App() {
	console.log(useLoaderData());

	return (
		<>
			<section className={styles.hero}>
				<Nav />
				<div className={styles.hero_content}>
					<div className={styles.hero_image}>
						<img
							src={image}
							className={styles.hero_image_intro}
							alt="Star wars intro logo"
						/>
						<h1
							style={{
								color: "white",
								position: "absolute",
								top: "50%",
							}}>
							The Force Awaken
						</h1>
					</div>
				</div>
			</section>
		</>
	);
}

export default App;
