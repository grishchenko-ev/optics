import React from "react";
import {useHistory} from "react-router-dom";
import "./styles.scss";

const GoBack = () => {
    return <button type="button" onClick={useHistory().goBack}>
        Назад
    </button>
}

export const Layout = () => {
    const pathName = useHistory().location.pathname;

    return <header>
        <div className="container justify">
            {(pathName === "/")
                ? <span>Компания/лого</span>
                : <GoBack />
            }
            <ul className="contacts">
                <li> <a href="tel:+380674694546">Александр: +380 67 469 4546</a></li>
                <li><a href="tel:+380933736310">Евгений: +380 93 373 6310</a></li>
            </ul>
        </div>
    </header>
}