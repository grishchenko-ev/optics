## Добавление категории
Переходим в файл src/app/products/categories/data.ts
### 
    {
        title: "Category 1",
        link: "/category-1",
        image: category1Img,
    },
Добавляем данный фрагмент кода, где title - название категории, link - ссылка на категорию, image - изображение категории. 
Чтобы добавить изображение категории, необходимо добавить файл с изображение в папку src/app/products/categories/images и 
добавить в файл src/app/products/categories/data.ts следующий код
### 
    export const category1Img = require("./images/category-1-img.jpg");
где category1Img - название константы, которое нужно будет указать в свойстве image (смотреть фрагмент кода выше), 
а "./images/category-1-img.jpg" - путь к файлу с изображением.

## Добавление товара
Переходим в папку src/app/products/categories/название_категории.ts
###
    {
        slug: "000001",
        images: [
            {
                original: img1,
                thumbnail: img1,
            },
            {
                original: img2,
                thumbnail: thumbImg2,
            },
        ],
        video: video1,
    },
Добавляем данный фрагмент кода, где slug - артикул товара; images - изображения, которые будут в товаре, 
где original - оригинальное (полноразмерное) изображение, thumbnail - миниатюра изображения. Файл с изображением
добавлять в те же папку, куда и изображения категорий (смотреть выше); video - видео, добавляется аналогично изображениям
###
    const video1 = require("./videos/glasses_test.mp4");

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
