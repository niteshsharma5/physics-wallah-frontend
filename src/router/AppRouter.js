import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Counter from "../components/Counter/Counter";
import Name from "../components/Name/Name";

const AppRouter = () => {
  return (
    <Router>
      <Route exact path="/" component={Counter} />
      <Route path="/name" component={Name} />
    </Router>
  );
};

export default AppRouter;
