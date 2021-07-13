import React from "react";
import {createBrowserHistory} from "history";
import {Router, Switch, useHistory} from "react-router-dom";
import {routes} from "./routes";
import "../../styles/main.scss";
import {useDataApi} from "./use-data-api";

export const history = createBrowserHistory({
    basename: (process.env.NODE_ENV === "development") ? "/" : "/optics"
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
