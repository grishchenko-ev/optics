import * as React from "react";
import {PageLayout} from "modules/layout";
import {Layout} from "./Layout";

export const Page: React.FC = () => {
    return (
        <PageLayout>
            <Layout />
        </PageLayout>
    );
};
