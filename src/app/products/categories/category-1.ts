import {ViewProps} from "../view/Layout";

const img1 = require("./images/category-1-img.jpg");
const img2 = require("./images/category-2-img.jpg");

export const data: Array<ViewProps> = [
    {
        slug: "000001",
        images: [
            {
                original: img1,
                thumbnail: img1,
            },
            {
                original: img1,
                thumbnail: img1,
            },
        ],
    },
]