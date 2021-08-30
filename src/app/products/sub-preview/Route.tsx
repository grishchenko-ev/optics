import * as React from "react";
import { Page } from "./Page";
import {Route as ReactRoute} from "react-router-dom";

export const Route: () => React.ReactElement = () => {
    return <ReactRoute key="sub" path="/:category/:sub" exact component={Page} />
};
