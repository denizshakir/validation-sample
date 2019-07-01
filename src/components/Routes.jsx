import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import { AppContext } from "../app-context";
import { PATHS } from "../constants/routeConstants";

const Routes = props => {

    return (
        <AppContext.Consumer>
            {({ loggedUser, updateLoggedUser }) => {
                const isLogged = !!loggedUser;
                return (<>
                    <hr />
                    <Switch>
                        <Route exact path={PATHS.HOME} component={Home} />
                        <Route path={PATHS.SIGN_IN} render={() => !isLogged ? <SignIn /> : <Redirect to={PATHS.HOME} />} />
                        <Route path={PATHS.SIGN_UP} render={() => !isLogged ? <SignUp /> : <Redirect to={PATHS.HOME} />} />
                        <Route path={PATHS.DASHBOARD} render={() => isLogged ? <Dashboard /> : <Redirect to={PATHS.SIGN_IN} />} />
                        <Route path="/logout" render={() => <Redirect to={PATHS.HOME} />} />
                    </Switch>
                </>);
            }}
        </AppContext.Consumer>
    );
}

export default Routes;

