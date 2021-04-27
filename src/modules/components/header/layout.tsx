import React from "react";
import {Link} from "react-router-dom";
import {Navigation} from "modules/components/navigation";
import "./styles.scss";

export const Layout = () => {
    return <header>
        <div className="container">
            <Link to="/" className="logo">
                LOGO
            </Link>
            <Navigation />
        </div>

    </header>
}