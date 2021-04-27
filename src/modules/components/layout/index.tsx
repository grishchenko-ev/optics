import React from "react";
import * as Header from "modules/components/header";
import * as Footer from "modules/components/footer";

export const PageLayout: React.FC = ({ children }) => {
    return (<>
        <Header.Layout />
        <main>
            {children}
        </main>
        <Footer.Layout />
    </>);
}
PageLayout.displayName = "Page.Layout";
