import { FETCH_MAIN_DATA_SUCCESS } from "../actions/types";

const INTIAL_STATE = {
	data: {}
};

export default (state = INTIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_MAIN_DATA_SUCCESS:
			return { ...state, data: action.payload };
		default:
			return state;
	}
};
