import {ItemProps} from "./index";

export const category1Img = require("./category-1-img.jpg");
export const category2Img = require("./category-2-img.jpg");

export const categories: Array<ItemProps> = [
    {
        title: "Category 1",
        link: "/category-1",
        image: category1Img,
    },
    {
        title: "Category 2",
        link: "/category-2",
        image: category2Img,
    }
]