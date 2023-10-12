import axios from "axios";

const defaultOptions = {
	// baseURL: base.url,
	baseURL: "https://www.google.com/webhp?authuser=1",
	method: "get",
	headers: {
		"Content-Type": "application/json",
	},
};

let instance = axios.create(defaultOptions);
instance.interceptors.request.use(
	function (config) {
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

instance.interceptors.response.use(
	(response) => {
		return Promise.resolve(response);
	},
	(error) => {
		if (error.message === "Network Error" && !error.response) {
		}
		if (
			401 === error?.response?.status &&
			error.response.data.result.TYPE === "INVALID_TOKEN"
		) {
			console.log("INVALID_TOKEN");
		}

		if (error) {
			return Promise.reject(error);
		}
	}
);

export default instance;
