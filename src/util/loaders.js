const api = import.meta.env.VITE_API_URL;

export const homeLoader = async () => {
	const response = await fetch(api);

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	return response;
};
