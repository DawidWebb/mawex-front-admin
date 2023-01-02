import { combineReducers } from "redux";
import { sessionStorageReducer } from "./session-storage/session-storage.reducer";
import { userReducer } from "./user/user.reducer";

export const rootReducers = combineReducers({
	session: sessionStorageReducer,
	user: userReducer,
});
