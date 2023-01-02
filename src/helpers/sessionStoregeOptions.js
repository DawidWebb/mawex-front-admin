export const addSessionItem = (id) => {
	window.sessionStorage.setItem("adminMawexSite", id);
};

export const deleteSessionItem = () => {
	window.sessionStorage.removeItem("adminMawexSite");
};

export const checkSessionItem = () => {
	return window.sessionStorage.getItem("adminMawexSite");
};
