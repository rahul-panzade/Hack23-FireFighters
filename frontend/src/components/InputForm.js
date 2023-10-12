import "../css/input.css";

import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const QUERY_PARAMETER: string = "appid";
const InputForm = () => {
	const [inputValue, setInputValue] = useState("");
	const history = useNavigate();
	const [currentQueryParameters, setSearchParams] = useSearchParams();
	const newQueryParameters = new URLSearchParams();

	const handleChange = (e) => {
		if (e.target.value);
		newQueryParameters.set(QUERY_PARAMETER, e.target.value);

		setSearchParams(newQueryParameters);
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// history(`/${inputValue}`);
	};

	useEffect(() => {
		if (currentQueryParameters.get(QUERY_PARAMETER)) {
			setInputValue(currentQueryParameters.get(QUERY_PARAMETER));
		}

		return () => {};
	}, []);

	return (
		<div className="search-input">
			<form onSubmit={handleSubmit} role="search">
				<label for="search">Search for Application Id</label>
				<input
					id="search"
					type="search"
					placeholder="Search Application Number"
					autofocus
					required
					value={inputValue}
					onChange={handleChange}
				/>
				<button type="submit">Go</button>
			</form>
		</div>
	);
};

export default InputForm;
