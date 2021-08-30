import React from "react";

export const Download: React.FC<{url: string, video?: boolean}> = ({url, video}) => {
    return <a
            download
            href={url}
            className="download__item"
            target="_blank"
        >
            {video ? <i className="icon icon_movie" /> : <img src={url} alt="Image" />}
        </a>
}
Download.displayName = "Download.Item";
