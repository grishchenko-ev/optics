import React from "react";

export const Download: React.FC<{url: string, video?: boolean}> = ({url, video}) => {
    return video
        ? <a
            href={url}
            className="download__item"
            download
        >
            <i className="icon icon_movie" />
        </a>
        : <a
        href={url}
        className="download__item"
        download
    >
        <img src={url} alt="Image"/>
    </a>
}
Download.displayName = "Download.Item";
