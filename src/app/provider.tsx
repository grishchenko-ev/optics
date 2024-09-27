import React from "react";
import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router-dom";
import { routes } from "./routes";
import { CartProvider } from "./cart/Context";
import "../../styles/main.scss";

export const history = createBrowserHistory({
    basename: "/",
});

export const Provider: React.FC = () => {
    return (
        <Router history={history}>
            <ProviderContent />
        </Router>
    );
};
Provider.displayName = "App.Provider";

const ProviderContent = () => {
    // React.useEffect(() => {
    //     window.addEventListener("beforeunload", alertUser);
    //     return () => {
    //         window.removeEventListener("beforeunload", alertUser);
    //     };
    // }, []);
    // const alertUser = (e: any) => {
    //     e.preventDefault();
    //     e.returnValue = "";
    // };

    // useDataApi();
    return (
        <CartProvider>
            <Switch>{routes()}</Switch>
        </CartProvider>
    );
};
