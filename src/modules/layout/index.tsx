import React from "react";

export const PageLayout: React.FC = ({ children }) => {
    return (<>
        <header>Navigation</header>
        <main>
            {children}
        </main>
    </>);
}
PageLayout.displayName = "Page.Layout";
