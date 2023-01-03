import request from "../../helpers/request";
import { addSpinner, removeSpinner } from "../spinner";
import { timeoutShowTask } from "../task-informations";
import { sessionItemSet, sessionItemDel } from "../session-storage";

export const USER_LOGOUT = "USER_LOGOUT";
export const USER_LOGIN = "USER_LOGIN";

export const userLogin = (userData) => async (dispatch) => {
	dispatch(addSpinner());
	const { data } = await request.post("auth/login", userData, {
		headers: { "Content-Type": "application/json" },
		credentials: "include",
		withCredentials: true,
	});

	if (!data.status || data.status !== 200) {
		dispatch(removeSpinner());
		dispatch(timeoutShowTask(data.error));
	} else {
		dispatch(removeSpinner());
		dispatch(sessionItemSet(data.data));
		dispatch({
			type: USER_LOGIN,
			payload: data.data,
		});
	}
};
export const addLogout = () => async (dispatch) => {
	dispatch(addSpinner());
	const { data } = await request.get("auth/logout", {
		headers: { "Content-Type": "application/json" },
		credentials: "include",
		withCredentials: true,
	});

	if (data.status === 200) {
		dispatch(removeSpinner());
		dispatch(sessionItemDel());
		dispatch({
			type: USER_LOGOUT,
		});
	} else {
		dispatch(removeSpinner());
		dispatch(timeoutShowTask(data.error || data.message));
	}
};
