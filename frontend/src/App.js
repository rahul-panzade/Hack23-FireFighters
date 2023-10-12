import "./css/badge.css";

import {
	Link,
	Navigate,
	Outlet,
	Route,
	BrowserRouter as Router,
	Routes,
	useLocation,
	useNavigate,
	useParams,
	useSearchParams,
} from "react-router-dom";
import React, { useEffect } from "react";

import Email from "./pages/email";
import InputForm from "./components/InputForm";
import PageNotFound from "./pages/pagenotFound";
import Pan from "./pages/pan";
import Register from "./pages/register";
import axios from "axios";

// import { useState } from "react";

const QUERY_PARAMETER = "appid";
function AppLayout() {
	const [currentQueryParameters, setSearchParams] = useSearchParams();
	const { pathname } = useLocation();
	const history = useNavigate();
	const handleSubmit = (e, value) => {
		e.preventDefault();
		// history(`/${inputValue}`);
		networkRequest(value);
	};

	function networkRequest(appid) {
		axios.get(`http://localhost:8080/events?appNumber=${appid}`).then((res) => {
			console.log(res.data);
			if (res.data.data.screen_name !== pathname) {
				history(`/${res.data.data.screen_name}?appid=${appid}`);
			}
			localStorage.setItem("ids", JSON.stringify(res.data.data.events));
		});
	}
	useEffect(() => {
		console.log("path", pathname);
		if (currentQueryParameters.get(QUERY_PARAMETER)) {
			networkRequest(currentQueryParameters.get(QUERY_PARAMETER));
		}
		return () => {};
	}, []);

	return (
		<div className="main">
			<InputForm handleSubmit={handleSubmit} />
			<div className="routes">
				<Routes>
					<Route path="/" element={<div></div>} />
					<Route path="/register" element={<Register />} />
					<Route path="/email" element={<Email />} />
					<Route path="/email" element={<Email />} />
					<Route path="/pan" element={<Pan />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</div>
		</div>
	);
}

export default function App() {
	return (
		<Router>
			<AppLayout />
		</Router>
	);
}
