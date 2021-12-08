import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "../components/HomePage";
import Pokemon from "../components/Pokemon";

const AppRouter = () => {
	return (
		<Router>
			<Route exact path="/" component={HomePage} />
			<Route path="/pokemon" component={Pokemon} />
		</Router>
	);
};

export default AppRouter;
