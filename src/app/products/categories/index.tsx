import React from "react";
import {Link} from "react-router-dom";
import {categories} from "./data";
import {useDataApi} from "../../use-data-api";

export interface ItemProps {
    title: string,
    link: string,
    image: string,
}

export const Categories = () => {
    useDataApi();
    return <ul className="list">
        {categories.map((item, i) =>
            <li key={item.link}>
                <Link
                    to={item.link}
                >
                    <img src={item.image} alt={item.title}/>
                    <h3>{item.title}</h3>
                </Link>
            </li>
        )}
    </ul>
}
Categories.displayName = "Categories";
