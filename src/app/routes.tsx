import * as React from "react";
import * as Home from "./home";
import {Redirect} from "react-router-dom";

export const routes = (): Array<React.ReactNode> => [
    Home.Route(),
    <Redirect key="not-found" to="/not-found"/>,
];
