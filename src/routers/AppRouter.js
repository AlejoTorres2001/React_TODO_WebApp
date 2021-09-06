import React from "react";

import { BrowserRouter as Router, Route, Switch,Redirect, Link, NavLink } from "react-router-dom";
import NavegationBar from "../components/NavegationBar";
const AppRouter = () => {
    return (
        <Router>
            <NavegationBar></NavegationBar>
            <Switch>

            <Route exact path="/">
                <h1>Home</h1>
            </Route>

            <Route exact path="/about">
                <h1>About</h1>
            </Route>




            </Switch>
        </Router>
    );
}

export default AppRouter;
