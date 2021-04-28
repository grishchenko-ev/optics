import React from "react";
import {useHistory} from "react-router-dom";
import Axios from "axios";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import fileDownload from 'js-file-download';

type ImageType = {
    original: string,
    thumbnail:string
}

export interface ViewProps {
    slug: string,
    images: Array<ImageType>,
}

export const Layout = () => {
    const [item, setItem] = React.useState<ViewProps>();
    const pathname = useHistory().location.pathname;
    const category = pathname.substring(0, useHistory().location.pathname.lastIndexOf('/'));
    const slug = pathname.split("/").pop();

    React.useEffect(() => {
        const product = import(`../categories${category}`);
        if (!product) {
            return;
        }

        product.then(({data}) => {
            setItem(data.find((i: any) => i.slug === slug))
        });

    }, [setItem, category, slug]);
    console.log(item?.images)
    return <div className="container column">
        {item && <>
            <ImageGallery items={item.images} />
            <h3>Артикул: {item.slug}</h3>
            <a href="http://0.0.0.0:8089/category-1-img.4f3d6d.jpg" download>Download</a>
        </>}
    </div>
}
Layout.displayName = "View.Layout";
