import { Outlet } from "react-router-dom";
import styles from "./App.module.scss";
import { Nav } from "./components";
import image from "./assets/hero-image-starwar.webp";

function App() {
	return (
		<>
			<section
				className={styles.hero}
				aria-label="Welcome to Star wars the force awaken">
				<Nav />
				<div className={styles.hero_content}>
					<div className={styles.hero_image}>
						<img
							src={image}
							className={styles.hero_image_intro}
							alt="Star wars intro logo"
						/>
						<h1 className={styles.hero_text}>The Force Awaken</h1>
					</div>
				</div>
			</section>
			<section
				aria-label="Popular Starship"
				className={styles.popularSearch}>
				<h2>Popular Starship</h2>

				<Outlet />
			</section>
		</>
	);
}

export default App;
