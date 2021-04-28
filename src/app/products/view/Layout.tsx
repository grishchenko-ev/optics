import React from "react";
import {useHistory} from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import {Download} from "./Download";
import "./styles.scss";

type ImageType = {
    original: string,
    thumbnail: string
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

    const downloadData = item?.images.map((i) => i.original);

    return <div className="container column">
        {item && <>
            <ImageGallery items={item.images}/>
            <h3>Артикул: {item.slug}</h3>
            <h2>Доступно для скачивания</h2>
            <div className="download">
                {downloadData?.map((url, i) =>
                    <Download
                        key={url + i}
                        url={url}
                    />
                )}
            </div>
        </>}
    </div>
}
Layout.displayName = "View.Layout";
