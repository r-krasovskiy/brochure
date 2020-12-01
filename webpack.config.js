const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode:'development',
    entry: './src/index.js',
    devServer: {
        contentBase: "./dist"
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            mode: 'development',
            template: "./src/index.html",
            filename: "./index.html"
        }),
         new MiniCssExtractPlugin({
             filename: '[name].css'
            }),
    ],
    
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    }
};