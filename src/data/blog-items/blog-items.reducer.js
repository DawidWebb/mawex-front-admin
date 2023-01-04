import { GET_ALL_BLOG_ITEMS, ADD_BLOG_ITEM, EDIT_BLOG_ITEM, DELETE_BLOG_ITEM } from "./blog-items.actions";

const initialState = [];

export const blogItemsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_BLOG_ITEMS:
			return action.payload;
		case ADD_BLOG_ITEM:
			return [...state, action.payload];
		case EDIT_BLOG_ITEM:
			const index = state.findIndex((item) => item._id === action.payload._id);
			state.splice(index, 1, action.payload);
			return [...state];
		case DELETE_BLOG_ITEM:
			return state.filter((item) => item._id !== action.payload);
		default:
			return state;
	}
};
