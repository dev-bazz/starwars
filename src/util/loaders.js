const api = import.meta.env.VITE_API_URL;

export const homeLoader = async (page) => {
	const response = await fetch(`${api}${!page ? "" : `/?page=${page}`}`);

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	return response;
};
