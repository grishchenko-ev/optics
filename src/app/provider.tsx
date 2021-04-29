import React from "react";
import {createBrowserHistory} from "history";
import {Router, Switch} from "react-router-dom";
import {routes} from "./routes";
import "../../styles/main.scss";

export const history = createBrowserHistory({
    basename: (process.env.NODE_ENV === "development") ? "/" : "https://grishchenko-ev.github.io/optics/"
});

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
