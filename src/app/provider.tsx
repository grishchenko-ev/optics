import React from "react";
import {createBrowserHistory} from "history";
import {Router, Switch} from "react-router-dom";
import {routes} from "./routes";
import "../../styles/main.scss";

export const history = createBrowserHistory();

export const Provider: React.FC = () => {
    return (
        <Router history={history}>
            <ProviderContent/>
        </Router>
    );
};
Provider.displayName = "App.Provider";

const ProviderContent = () => {

    return <>
        <Switch>
            {routes()}
        </Switch>
    </>;
};
