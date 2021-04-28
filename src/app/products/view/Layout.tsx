import React from "react";
import {useHistory} from "react-router-dom";

export interface ViewProps {
    slug: string,
    image: Array<string>,
}

export const Layout = () => {
    const [item, setItem] = React.useState<ViewProps>();
    const pathname = useHistory().location.pathname;
    const category = pathname.substring(0, useHistory().location.pathname.lastIndexOf('/'));
    const slug = pathname.split("/").pop();

    console.log(slug)

    React.useEffect(() => {
        const product = import(`../categories${category}`);
        if (!product) {
            return;
        }

        product.then(({data}) => {
            setItem(data.find((i: any) => i.slug === slug))
        });

    }, [setItem, category, slug]);

    return <div className="container">
        {item && <>
            <picture>
                <source srcSet={item.image[0]} media="(max-width: 500px)"/>
                <img src={item.image[0]} alt="Product"/>
            </picture>
            <h3>Артикул: {item.slug}</h3>
        </>}
    </div>
}
Layout.displayName = "View.Layout";
