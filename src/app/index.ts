import { createElement } from "react";
import * as ReactDOM from "react-dom";
import {ContainerElement} from "modules/components/container";
import {Provider} from "./provider";
import { Dropbox } from 'dropbox';
import axios from "axios";

const accessToken = 'sl.AwlPqSc-IbM8Qt10FaymQugUyBj9p-LtUfrOPVCTGeTW5bczlDr3iDZWcrtzcMg5UyGurax272P32To6lEiZ1igjQ0tL-FWqlZR3IyJYaK709vQmZh1r2jloWhTNnW9oYFLneb0';

const dbx = new Dropbox({
    accessToken
});

dbx.filesListFolder({path: ''})
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.error(error);
    });

ReactDOM.render(createElement(Provider), ContainerElement());
