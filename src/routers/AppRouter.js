import React from "react";

import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import NavegationBar from "../components/NavegationBar";
import  TaskPage  from "../components/pages/Tasks/TaskPage";
import NotFoundPage from "../components/pages/NotFound/NotFoundPage";
import HomePage from "../components/pages/Home/HomePage";
import AboutPage from "../components/pages/About/AboutPage";
import LoginPage from "../components/pages/Login/LoginPage";
import RegisterPage from "../components/pages/Register/RegisterPage";
import Footer from "../components/Footer";
import PrivateRoute from "./PrivateRoute";
const AppRouter = () => {
    return (
        <Router>
            <NavegationBar></NavegationBar>
            <Switch>
            <Route exact path="/" component={HomePage}/>
                

            <Route exact path="/about" component={AboutPage}/>
               

            <Route exact path="/login" component={LoginPage}/>
                
            <Route exact path="/register" component={RegisterPage}/>
            <PrivateRoute exact path="/tasks" component={TaskPage}/>
            <Route path="/404" component={NotFoundPage} />
        <Route path="*" > <Redirect to="/404"></Redirect> </Route>




            </Switch>
        <Footer></Footer>
        </Router>
    );
}

export default AppRouter;
