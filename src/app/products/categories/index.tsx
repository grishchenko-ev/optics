import React from "react";
import {useDataApi} from "../../use-data-api";
import * as LinkedImage from "modules/components/linked-image";

export interface ItemProps {
    title: string,
    link: string,
    image: string,
}

export const Categories: React.FC<{}> = () => {
    const data = useDataApi();

    if (!data) {
        return null;
    }

    return <ul className="list">
        {data?.map((item, i) =>
            <li key={item}>
                <LinkedImage.Layout src={item} />
            </li>
        )}
    </ul>
}
Categories.displayName = "Categories";
