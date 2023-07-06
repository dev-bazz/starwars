import { useLoaderData, useSearchParams } from "react-router-dom";
import styles from "./result.module.scss";
import image from "./assets/starship-2.webp";
import { useState } from "react";

export function Result() {
	console.log(useLoaderData());
	const [state, setState] = useState();
	const [searParams, setSearchParams] = useSearchParams();
	const { results, next } = useLoaderData();

	console.log(searParams.get("page"));
	function filterResults() {
		return results.filter((result) =>
			result.name.toLowerCase().includes(state.toLowerCase().trim())
		);
	}
	const filtered = state ? filterResults() : results;
	const paginator = () => {
		const nextPage = next.split("?")[1].split("=")[1];
		setSearchParams({ page: nextPage });
	};

	return (
		<div
			className={styles.container}
			style={{ marginTop: "40px" }}>
			<div
				className="searh"
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}>
				<input
					className={styles.search}
					type="text"
					onChange={(e) => setState(e.target.value)}
					placeholder="Search for a starship"
				/>
				<div className={styles.paginate}>
					<p>Page 1 of 10</p>
					<div className={styles.paginate_btns}>
						<button className={styles.search_btn}>Prev</button>
						<button
							className={styles.search_btn}
							onClick={paginator}>
							Next
						</button>
					</div>
				</div>
			</div>
			{filtered.length > 0 ? (
				<ul
					className={styles.results}
					style={{ marginTop: "40px" }}>
					{filtered?.map((result, key) => (
						<li key={key}>
							<div className={styles.ships}>
								<img
									src={image}
									alt="Space Ship"
								/>
								<h4 className={styles.results_title}>{result.name}</h4>
								<p
									className={
										styles.results_details
									}>{`Manufacturer by  ${result.manufacturer},
this vehicle cost ${result.cost_in_credits} credits.  It can accommodate ${result.passengers} passengers . It has a caergo capacity of 3000000`}</p>
								<button className={styles.results_btn}>Read More</button>
							</div>
						</li>
					))}
				</ul>
			) : (
				<div className={styles.no_results}>
					<p>No results found</p>
				</div>
			)}
		</div>
	);
}
