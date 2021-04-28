import React from "react";
import {Categories} from "../products/categories";

export const Layout = () => {
    return <>
        <h1>Бренды</h1>
        <Categories />
    </>
}
Layout.displayName = "Home.Layout";
