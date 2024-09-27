import * as React from "react";
import * as Home from "./home";
import * as Collection from "./products/preview";
import * as SubCollection from "./products/sub-preview";
import * as Product from "./products/view";
import * as Cart from "./cart";
import { Redirect } from "react-router-dom";

export const routes = (): Array<React.ReactNode> => [
    Home.Route(),
    Cart.Route(),
    Collection.Route(),
    SubCollection.Route(),
    Product.Route(),
    <Redirect key="not-found" to="/not-found" />,
];
