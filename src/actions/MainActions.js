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
			const response = await fetch("", fetchOptions);
			const data = await response.json();
			dispatch(mainDataSuccess(data.results));
		} catch (err) {
			dispatch(mainDataFailure(err));
		}
	};
};
