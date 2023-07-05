import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";
import logo from "./assets/logo.png";

export function Nav() {
	return (
		<nav className={styles.Nav}>
			<div className={styles.Nav_logo}>
				<img
					src={logo}
					alt="star wars logo"
				/>
			</div>

			<ul className={styles.Nav_links}>
				<li>
					<NavLink to="/">Characters</NavLink>
				</li>
				<li>
					<NavLink to="/">Starships</NavLink>
				</li>
				<li>
					<NavLink to="/">Planets</NavLink>
				</li>
			</ul>
		</nav>
	);
}
