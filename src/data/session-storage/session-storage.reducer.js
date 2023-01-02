import { SESSION_ITEM_SET, SESSION_ITEM_DELETE } from "./session-storege.actions";

const initialState = null;

export const sessionStorageReducer = (state = initialState, action) => {
	switch (action.type) {
		case SESSION_ITEM_SET:
			return (state = action.sessionStorage);
		case SESSION_ITEM_DELETE:
			return initialState;
		default:
			return state;
	}
};
