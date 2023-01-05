import { ADD_BLOG_PHOTO, CLEAR_BLOG_PHOTO } from "./blog-items.actions";

const initialState = null;

export const photoItemReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_BLOG_PHOTO:
			return action.payload;
		case CLEAR_BLOG_PHOTO:
			return initialState;
		default:
			return state;
	}
};
