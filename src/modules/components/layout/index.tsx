import React from "react";
import * as Header from "modules/components/header";
import * as Footer from "modules/components/footer";
import {useDataApi} from "../../../app/use-data-api";

export const PageLayout: React.FC = ({ children }) => {
    useDataApi();
    return (<>
        <Header.Layout />
        <main>
            {children}
        </main>
    </>);
}
PageLayout.displayName = "Page.Layout";
