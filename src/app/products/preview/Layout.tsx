import React from "react";
import {Link, useParams, useHistory} from "react-router-dom";
import {ViewProps} from "../view/Layout";

const Item: React.FC<ViewProps> = ({slug, images}) => {
    const category = useHistory().location.pathname;

    return <Link to={`${category}/${slug}`}>
        <img src={images[0].original} alt="Product"/>
        <h3>Артикул: {slug}</h3>
    </Link>
}

export const Layout = () => {
    const [items, setItems] = React.useState<Array<ViewProps>>();
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

    return <ul className="list container">
        {items && items.map((item, i) =>
            <li  key={i}>
                <Item
                    slug={item.slug}
                    images={item.images}
                />
            </li>
        )}
    </ul>
}
Layout.displayName = "Preview.Layout";
