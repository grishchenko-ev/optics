import React from "react";
import {Link} from "react-router-dom";
import "./styles.scss";

export const Layout = () => {
    return <header>
        <div className="container">
            <Link to="/" className="logo">
                LOGO
            </Link>
            <ul>
                <li> <a href="tel:+380674694546">Александр: +380 67 469 4546</a></li>
                <li><a href="tel:+380933736310">Евгений: +380 93 373 6310</a></li>
            </ul>
        </div>
    </header>
}