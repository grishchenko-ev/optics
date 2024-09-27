import { useHistory } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Download } from "./Download";
import { useDataApi } from "../../use-data-api";
import * as CartControls from "app/cart/controls";
import "./styles.scss";
import { CopyButton } from "modules/components/copy-button";

type ImageType = {
    original: string;
    thumbnail?: string;
};

export interface ViewProps {
    slug: string;
    images: Array<ImageType>;
    video?: string;
}

export const Layout = () => {
    const data = useDataApi();
    const pathname = useHistory().location.pathname;
    const itemId = pathname.substring(1);
    const slug = pathname.split("/").pop();
    const fullApi = process.env.FULL_API_URL;
    const formattedData = (
        data: Array<string> | undefined,
        extension: string
    ): Array<string> | null => {
        if (!data) {
            return null;
        }

        return data.filter((file) => file.endsWith(extension));
    };
    const extension = ".jpg" || ".jpeg";

    const downloadData = formattedData(data, extension)?.map((i) => i);
    console.log(downloadData);
    const video = data?.filter((item) => item.split(".").pop() === "mp4")[0];
    const galleryData: Array<ImageType> | undefined = formattedData(
        data,
        extension
    )?.map((item) => ({
        original: fullApi + "/" + item,
        thumbnail: fullApi + "/" + item,
    }));

    return (
        <div className="container column">
            {galleryData && <ImageGallery items={galleryData} />}
            {video && (
                <video controls src={fullApi + "/" + video}>
                    <a href={fullApi + "/" + video} download />
                </video>
            )}
            <h3>Артикул: {slug}</h3>
            <CartControls.Layout id={itemId} />
            {downloadData && (
                <CopyButton value={fullApi + "/" + downloadData[0]} />
            )}
            <h2>Доступно для скачивания</h2>
            <div className="download">
                {video
                    ? downloadData
                          ?.map((url, i) => (
                              <Download
                                  key={url + i}
                                  url={fullApi + "/" + url}
                              />
                          ))
                          .concat(
                              <Download
                                  key={video}
                                  url={fullApi + "/" + video}
                                  video
                              />
                          )
                    : downloadData?.map((url, i) => (
                          <Download key={url + i} url={fullApi + "/" + url} />
                      ))}
            </div>
        </div>
    );
};
Layout.displayName = "View.Layout";
