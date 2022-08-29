const { resolve } = require('path');
const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: resolve(__dirname, "dist"),
    },
    mode: "development",
    module: {
       rules: [{test: /\.css$/, use: [{loader: "style-loader", options: {injectType: "linkTag"}}, {loader: "file-loader"}] }]
    },

}