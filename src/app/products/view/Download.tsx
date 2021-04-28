import React from "react";

export const Download: React.FC<{url: string}> = ({url}) => {

    return <a
        href={url}
        className="download__item"
        download
    >
        <img src={url} alt="Image"/>
    </a>
}
Download.displayName = "Download.Item";
