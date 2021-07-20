import React from "react";
import {useHistory} from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import {Download} from "./Download";
import "./styles.scss";
import {useDataApi} from "../../use-data-api";

type ImageType = {
    original: string,
    thumbnail?: string
}

export interface ViewProps {
    slug: string,
    images: Array<ImageType>,
    video?: string,
}

export const Layout = () => {
    const data = useDataApi()?.slice(1);
    console.log(data)
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


    if (!item) {
        return <span>Упс! Что то пошло не так(</span>
    }

    const video = item.video && Object.values(item.video)[0];

    const galleryData: Array<ImageType> | undefined = data?.map((item) => ({
        original: process.env.FULL_API_URL + "/" + item,
        thumbnail: process.env.FULL_API_URL + "/" + item
    }));

    console.log(galleryData)
    return <div className="container column">
        {galleryData && <ImageGallery items={galleryData}/>}
        {video && <video controls src={video}>
            <a href={video} download/>
        </video>}
        <h3>Артикул: {item.slug}</h3>
        <h2>Доступно для скачивания</h2>
        <div className="download">
            {video
                ? downloadData?.map((url, i) =>
                    <Download
                        key={url + i}
                        url={url}
                    />).concat(<Download key={video} url={video} video/>)
                : downloadData?.map((url, i) =>
                    <Download
                        key={url + i}
                        url={url}
                    />)
            }
        </div>
    </div>
}
Layout.displayName = "View.Layout";
