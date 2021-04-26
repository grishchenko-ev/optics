import { createElement } from "react";
import * as ReactDOM from "react-dom";
import {ContainerElement} from "modules/container";
import {Provider} from "./provider";

ReactDOM.render(createElement(Provider), ContainerElement());
