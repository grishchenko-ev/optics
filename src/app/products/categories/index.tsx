import React from "react";
import {Link} from "react-router-dom";
import {categories} from "./data";

export interface ItemProps {
    title: string,
    link: string,
    image: string,
}

export const Categories = () => {
    return <ul>
        <li>
            {categories.map((item) => <Link key={item.link} to={item.link}>
                <picture>
                    <source srcSet={item.image} media="(max-width: 500px)"/>
                    <img src={item.image} alt={item.title}/>
                </picture>
                <h3>{item.title}</h3>
            </Link>)}
        </li>
    </ul>
}
Categories.displayName = "Categories";
