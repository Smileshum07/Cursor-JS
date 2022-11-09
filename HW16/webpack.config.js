const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
    entry: ['./src/index.js'],
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
    },
    plugins: [
        new HtmlPlugin({
            filename: 'index.html',
            template: './src/index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(gif|png|jpeg|svg)$/i,
                use: [
                "file-loader",
                {
                    loader: "image-webpack-loader",
                    options: {
                        bypassOnDebug: true, // webpack@1.x
                        disable: true, // webpack@2.x and newer
                    },
                },
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['@babel/preset-env']
                    }
                }
            }
    ],
    },
 
};

