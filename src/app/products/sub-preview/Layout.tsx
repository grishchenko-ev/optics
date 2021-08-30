import React from "react";
import {useDataApi} from "../../use-data-api";
import * as LinkedImage from "modules/components/linked-image";

export const Layout = () => {
    const data = useDataApi();

    if (!data) {
        return null;
    }

    return <ul className="list container">
        {data.map((item, i) =>
            <li  key={i}>
                <LinkedImage.Layout src={item} />
            </li>
        )}
    </ul>
}
Layout.displayName = "SubPreview.Layout";
