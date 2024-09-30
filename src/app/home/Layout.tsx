import React from "react";
import { Categories } from "../products/categories";

export const Layout = () => {
    return (
        <>
            <h1>Бренди</h1>
            <Categories />
        </>
    );
};
Layout.displayName = "Home.Layout";
