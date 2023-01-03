import request from "../../helpers/request";
import { addSpinner, removeSpinner } from "../spinner";
import { timeoutShowTask } from "../task-informations";
import { sessionItemSet, sessionItemDel } from "../session-storage";

export const USER_LOGOUT = "USER_LOGOUT";
export const USER_LOGIN = "USER_LOGIN";

export const userLogin = (userData) => async (dispatch) => {
	dispatch(addSpinner());
	const { data } = await request.post("users", userData, {
		headers: { "Content-Type": "application/json" },
		credentials: "include",
		withCredentials: true,
	});

	if (!data.status || data.status !== 200) {
		dispatch(removeSpinner());
		dispatch(timeoutShowTask(data.error));
	} else {
		dispatch(removeSpinner());
		dispatch(sessionItemSet(data.user.id));
		dispatch({
			type: USER_LOGIN,
			payload: data.user,
		});
	}
};
export const addLogout = () => async (dispatch) => {
	dispatch(sessionItemDel());
	dispatch({
		type: USER_LOGOUT,
	});
};
