import * as React from 'react';
import {Link} from "react-router-dom";

type ImageProps = {
    src: string;
};

export const Layout: React.FC<ImageProps> = ({src}) => {
    const cutSrc = src.replace(/\.[^/.]+$/, "");

    return <Link to={"/" + cutSrc}>
        <img src={process.env.FULL_API_URL + "/" + src} alt={cutSrc}/>
        <h3>{cutSrc.split("/").pop()}</h3>
    </Link>;
};
