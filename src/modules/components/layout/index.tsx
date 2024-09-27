import React from "react";
import * as Header from "modules/components/header";

export const PageLayout: React.FC = ({ children }) => {
    return (
        <>
            <Header.Layout />
            <main>{children}</main>
        </>
    );
};
PageLayout.displayName = "Page.Layout";
