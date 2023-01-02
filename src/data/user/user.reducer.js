import { USER_LOGOUT, USER_LOGIN } from "./user.actions";

const initialState = [];

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case USER_LOGIN:
			return [action.payload];
		case USER_LOGOUT:
			return [];
		default:
			return state;
	}
};
