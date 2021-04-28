import React from "react";
import {Link, useParams, useHistory} from "react-router-dom";

export interface PreviewProps {
    slug: string,
    image: string,
}

const Item: React.FC<PreviewProps> = ({slug, image}) => {
    const category = useHistory().location.pathname;

    return <Link to={`${category}/${slug}`}>
        <picture>
            <source srcSet={image} media="(max-width: 500px)"/>
            <img src={image} alt="Product"/>
        </picture>
        <h3>Артикул: {slug}</h3>
    </Link>
}

export const Layout = () => {
    const [items, setItems] = React.useState<Array<PreviewProps>>();
    const slug = Object.values(useParams());

    React.useEffect(() => {
        const categoryItems = import("../categories/" + slug);
        if (!categoryItems) {
            return;
        }

        categoryItems.then(({data}) => {
            setItems(data)
        });

    }, [setItems, slug]);

    return <ul className="container">
        <li>
            {items && items.map((item, i) => <Item key={i} slug={item.slug} image={item.image[0]} />)}
        </li>
    </ul>
}
Layout.displayName = "Preview.Layout";
