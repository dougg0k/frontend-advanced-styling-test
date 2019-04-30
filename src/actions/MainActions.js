import { FETCH_MAIN_DATA_FAILURE, FETCH_MAIN_DATA_SUCCESS } from "./types";

const mainDataSuccess = data => {
	return {
		type: FETCH_MAIN_DATA_SUCCESS,
		payload: data
	};
};

const mainDataFailure = error => {
	return {
		type: FETCH_MAIN_DATA_FAILURE,
		payload: error
	};
};

export const fetchMainData = () => {
	const fetchOptions = {
		method: "GET",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json"
		}
	};
	return async dispatch => {
		try {
			const response = await fetch(
				process.env.DATA_ENDPOINT || "",
				fetchOptions
			);
			const data = await response.json();
			dispatch(mainDataSuccess(data || localData));
		} catch (err) {
			dispatch(mainDataFailure(err));
		}
	};
};

const localData = {
	title: "CodersClan Frontend Test",
	cards: [
		{
			image: `${process.env.PUBLIC_URL}/assets/card1.png`,
			title: "Aenean nec sem vestibulum",
			text:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut diam ac felis placerat consequat in vitae justo. Curabitur porta et dolor ac."
		},
		{
			image: `${process.env.PUBLIC_URL}/assets/logo.svg`,
			title: "Aenean nec sem vestibulum",
			text:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut diam ac felis placerat consequat in vitae justo. Curabitur porta et dolor ac. Morbi quis elementum ipsum"
		},
		{
			image: `${process.env.PUBLIC_URL}/assets/logo.svg`,
			background: `${process.env.PUBLIC_URL}/assets/card3.png`,
			title: "Aenean nec sem vestibulum",
			text:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut diam ac felis placerat consequat in vitae justo. Curabitur porta et dolor ac. Morbi quis elementum ipsum"
		}
	],
	cta: "Aenean vitae"
};
