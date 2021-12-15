const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => ({
    entry: [
        "@babel/polyfill",
        path.join(__dirname, "client", "style.css"),
        path.join(__dirname, "client", "src", "start.js"),
    ],
    output: {
        path: path.join(__dirname, "client", "public"),
        filename: "bundle.js",
    },
    performance: {
        hints: false,
    },
    devServer: {
        contentBase: path.join(__dirname, "client", "public"),
        proxy: {
            "/": {
                target: "http://localhost:3001",
            },
            "/socket.io": {
                target: "http://localhost:3001",
                ws: true,
            },
        },
        port: "3000",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
            },

            // {
            //     test: /\.css$/i,
            //     use: [
            //         MiniCssExtractPlugin.loader,
            //         {
            //             loader: "css-loader",
            //             options: {
            //                 url: false,
            //             },
            //         },
            //     ],
            // },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },

            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "bundle.css",
        }),
    ],
});
