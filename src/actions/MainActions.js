import { FETCH_MAIN_DATA_FAILURE, FETCH_MAIN_DATA_SUCCESS } from "./types";

export const fetchMainDataSuccess = data => {
	return {
		type: FETCH_MAIN_DATA_SUCCESS,
		payload: data
	};
};

const fetchMainDataFailure = error => {
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
			dispatch(fetchMainDataSuccess(data));
		} catch (err) {
			dispatch(fetchMainDataFailure(err));
		}
	};
};
