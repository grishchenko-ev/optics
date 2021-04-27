import * as React from "react";
import * as Home from "./home";
import * as Collection from "./product/preview";
import {Redirect} from "react-router-dom";

export const routes = (): Array<React.ReactNode> => [
    Home.Route(),
    Collection.Route(),
    <Redirect key="not-found" to="/not-found"/>,
];
