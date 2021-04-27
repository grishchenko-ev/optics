import React from "react";
import {NavLink} from "react-router-dom";
import "./styles.scss";

interface ItemProps {
    link: string,
    title: string
}

const Item: React.FC<ItemProps> = ({link, title}) => {
    return <li className="nav-list__item">
        <NavLink to={link}>
            {title}
        </NavLink>
    </li>
}

const data: Array<ItemProps> = [
    {
        link: "/",
        title: "Главная"
    },
    {
        link: "/collection",
        title: "Каталог"
    },
    {
        link: "/contacts",
        title: "Контакты"
    },
];

export const Navigation = () => {
    return <nav>
        <ul>
            {data.map((item, i) => <Item key={i} link={item.link} title={item.title} />)}
        </ul>
    </nav>
}
Navigation.displayName = "Navigation";
