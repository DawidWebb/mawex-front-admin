import axios from "axios";

const prodUrl = process.env.REACT_APP_PROD_ULR_TO_BACK;

const request = axios.create({
	// baseURL: "http://localhost:8000",
	baseURL: `${prodUrl}`,

	validateStatus: false,
});

export default request;
