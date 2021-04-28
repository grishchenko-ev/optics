import * as React from "react";
import { Page } from "./Page";
import {Route as ReactRoute} from "react-router-dom";

export const Route: () => React.ReactElement = () => {
    return <ReactRoute key="collection" path="/:category" exact component={Page} />
};
