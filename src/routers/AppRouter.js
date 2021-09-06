import React from "react";

import { BrowserRouter as Router, Route, Switch,Redirect, Link, NavLink } from "react-router-dom";
import NavegationBar from "../components/NavegationBar";
import  TaskPage  from "../components/pages/Tasks/TaskPage";
import NotFoundPage from "../components/pages/NotFoundPage";
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
            <Route exact path="/login">
                <h1>Login</h1>
            </Route>
            <Route exact path="/register">
                <h1>Register</h1>
            </Route>
            <Route exact path="/tasks" component={TaskPage}/>
            <Route path="/404" component={NotFoundPage} />
        <Route path="*" > <Redirect to="/404"></Redirect> </Route>




            </Switch>
        </Router>
    );
}

export default AppRouter;
