import "../css/input.css";

import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const QUERY_PARAMETER = "appid";
const InputForm = (props) => {
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

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	// history(`/${inputValue}`);
	// };

	useEffect(() => {
		if (currentQueryParameters.get(QUERY_PARAMETER)) {
			setInputValue(currentQueryParameters.get(QUERY_PARAMETER));
		}

		return () => {};
	}, []);

	return (
		<div className="search-input">
			<form onSubmit={(e) => props.handleSubmit(e, inputValue)} role="search">
				<label for="search">Search for Application Id</label>
				<input
					id="search"
					type="search"
					placeholder="Search Application Number"
					value={inputValue}
					onChange={handleChange}
				/>
				<button type="submit">Go</button>
			</form>
		</div>
	);
};

export default InputForm;
