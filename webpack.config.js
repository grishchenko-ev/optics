// tslint:disable
const path = require("path"),
    fs = require("fs"),
    webpack = require("webpack");

const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

// npm dependencies
const HtmlWebpackPlugin = require("html-webpack-plugin"),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    { CleanWebpackPlugin } = require("clean-webpack-plugin"),
    CopyWebpackPlugin = require("copy-webpack-plugin"),
    TerserPlugin = require("terser-webpack-plugin");
ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const meta = require("./meta.json");

const debug = process.env.NODE_ENV !== "production";
const env = debug ? "development" : "production";

const processEnv = Object.fromEntries(
    Object.entries(process.env)
        .filter(([, value]) => value !== undefined)
        .map(([key, value]) => [key, JSON.stringify(value)])
);

const config = {
    entry: path.resolve("./src/app/index.ts"),
    devServer: {
        open: false,
        host: "0.0.0.0",
        historyApiFallback: true,
        static: {
            publicPath: "/",
        },
    },

    output: {
        filename:
            env === "production" ? "[name].[contenthash].js" : "[name].js",

        path: path.resolve(__dirname, "./web"),
        publicPath: "/",
    },

    devtool: debug ? "source-map" : false,

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
        modules: ["./node_modules", "./src"].map((p) => path.resolve(p)),
        alias: {
            "object-assign": path.resolve(
                "./node_modules/core-js/internals/object-assign.js"
            ),
        },
        fallback: {
            path: false,
        },
    },

    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "/",
                        },
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: debug,
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: ["autoprefixer", "cssnano"],
                            },
                            sourceMap: debug,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sassOptions: {
                                includePaths: [
                                    path.resolve(
                                        "./node_modules/compass-mixins/lib"
                                    ),
                                    path.resolve(__dirname + "./styles"),
                                ],
                            },
                            sourceMap: debug,
                        },
                    },
                ],
            },
            {
                test: /\.(gif|png|jpe?g|webp)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: "asset/inline",
            },
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.(ts)x?$/,
                exclude: [/node_modules/],
                use: ["babel-loader", "ts-loader"],
            },
            {
                test: /\.mp4$/,
                use: "file-loader?name=videos/[name].[ext]",
            },
        ],
    },

    plugins: [
        new ForkTsCheckerWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: `[name].v${meta.version}.css`,
            chunkFilename: `[name].[hash].css`,
        }),
        new CleanWebpackPlugin(),
        new webpack.IgnorePlugin({
            resourceRegExp: /\.\/native/,
            contextRegExp: /\/pg\//,
        }),
        new HtmlWebpackPlugin({
            title: "Optics",
            minify: {
                minifyCSS: !debug,
                minifyJS: !debug,
                removeComments: !debug,
                trimCustomFragments: !debug,
                collapseWhitespace: !debug,
            },
            favicon: "./favicon.ico",
        }),
        new webpack.DefinePlugin({
            "process.env": processEnv,
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve("./templates/static/"),
                    to: path.resolve("./web/static/"),
                },
                {
                    from: path.resolve("./meta.json"),
                    to: path.resolve("./web/meta.json"),
                },
            ],
        }),
    ],
    optimization: {
        minimizer: [
            new TerserPlugin({
                parallel: true,
                extractComments: true,
                terserOptions: {
                    warnings: false,
                    module: false,
                    ie8: false,
                    keep_classnames: true,
                    keep_fnames: true,
                    safari10: true,
                },
            }),
        ],
        minimize: !debug,
        splitChunks: {
            chunks: "async",
            cacheGroups: {
                vendor: {
                    name: "vendor",
                    chunks: "all",
                    test: new RegExp(
                        "[\\/]node_modules[\\/](" +
                            [
                                "@babel/runtime",
                                "core-js",
                                "react",
                                "react-dom",
                                "react-helmet",
                                "react-router",
                                "react-router-dom",
                                "scheduler",
                                "react-img-webp",
                                "axios",
                            ].join("|") +
                            ")[\\/]"
                    ),
                },
            },
        },
    },
    mode: env === "production" ? "production" : "development",
    stats: debug || "errors-only",
};

if (debug) {
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = config;
