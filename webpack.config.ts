import * as webpack from "webpack";
import * as path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

const Config: webpack.Configuration = {
    devtool: "source-map",
    mode: "development",
    entry: "./src/react/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js"
    },
    resolve: {
        extensions: [ ".tsx", ".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                test: /\.(s?)css$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        publicPath: "/",
        hot: true,
        port: 9090
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/react/index.html",
            filename: path.join(__dirname, "dist/index.html")
        })
    ]
}

export default Config;