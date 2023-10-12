import {
	Link,
	Navigate,
	Outlet,
	Route,
	BrowserRouter as Router,
	Routes,
	useNavigate,
	useParams,
} from "react-router-dom";

import Email from "./pages/email";
import InputForm from "./components/InputForm";
import PageNotFound from "./pages/pagenotFound";
import Pan from "./pages/pan";
import React from "react";
import Register from "./pages/register";
import { useState } from "react";

function AppLayout() {
	return (
		<div className="main">
			<InputForm />
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
