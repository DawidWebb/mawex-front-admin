import { ADD_SPINNER, REMOVE_SPINNER } from "./spinner.actions";

const spinnerActive = false;

export const spinnerReducer = (state = spinnerActive, action) => {
	switch (action.type) {
		case ADD_SPINNER:
			return (state = action.spinnerActive);
		case REMOVE_SPINNER:
			return (state = action.spinnerActive);

		default:
			return state;
	}
};
