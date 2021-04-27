import React from "react";
import {Link} from "react-router-dom";
import * as Categories from "../categories";
const categoriesList = import(/* webpackChunkName: 'categories' */"../categories/data");


export interface PreviewProps {
    category?: string,
    slug: string,
    image: string,
}

const Item: React.FC<PreviewProps> = ({category, slug, image}) => {
    return <Link to={`${slug}`}>
        <picture>
            <source srcSet={image} media="(max-width: 500px)"/>
            <img src={image} alt="Product"/>
        </picture>
        <h3>Артикул: {slug}</h3>
    </Link>
}

export const Layout = () => {
    const [categories, setCategories] = React.useState<Array<Categories.ItemProps>>();
    console.log(categories, categoriesList)
    React.useEffect(() => {
        if (!categoriesList) {
            return;
        }

        categoriesList.then(async (data) => {
            setCategories(data.categories);
        })

    }, [setCategories]);

    return <ul className="container">
        <li>
            {categories && categories.map((item) => <Item key={item.link} slug={item.link} image={item.image} />)}
        </li>
    </ul>
}
Layout.displayName = "Preview.Layout";
