const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/[name][ext][query]',
        clean: true,
    },

    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"],

                //use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader", "postcss-loader"],
            },

            {
                test: /\.html$/i,
                loader: "html-loader",
            },

            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },

    devServer: {
        static: './dist',
        hot: true,
    },

    plugins: [
        new MiniCssExtractPlugin(),

        new HtmlWebpackPlugin({
            title: 'My Sample',
            filename: 'index.html',
            template: './src/index.html',
            inject: 'body',
            minify: false,
        }),
    ]
};