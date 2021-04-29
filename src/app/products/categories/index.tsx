import React from "react";
import {Link} from "react-router-dom";
import {categories} from "./data";

export interface ItemProps {
    title: string,
    link: string,
    image: string,
}

export const Categories = () => {
    return <ul className="list">
        {categories.map((item, i) =>
            <li>
                <Link
                    key={item.link + i}
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
