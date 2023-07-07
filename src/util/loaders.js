const api = import.meta.env.VITE_API_URL;

export const homeLoader = async (requesr) => {
	const page = new URL(requesr.url).searchParams.get("page");
	const response = await fetch(`${api}${!page ? "" : `/?page=${page}`}`);
	console.log(page, "Hey");
	if (!response.ok) {
		throw new Error(response.statusText);
	}

	return response;
};
