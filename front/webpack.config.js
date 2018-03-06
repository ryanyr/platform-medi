var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : {
        client:__dirname + "/src/js/client.js",
        admin:__dirname + "/src/js/admin.js"
    },
    output : {
        path : __dirname + "/dist/",
        // filename : "app.[chunkhash:8].js",
        filename : "app.[name].js"
    },
    devtool : "false",
    // devtool : "source-map",
    devServer : {
        contentBase : __dirname + "/dist/",
        port : 3000,
        inline : true
    },
    module : {
        loaders : [
            {test : /\.js$/,exclude : /node_modules/,loader:"babel-loader?presets[]=es2015&presets[]=react"},
            {test : /\.css$/,loader:"style-loader!css-loader"},
            {test : /\.less$/,loader:"style-loader!css-loader!less-loader"},
        ]
    },
    plugins : [
        new webpack.ProvidePlugin({
            React : "react",
            $:"jquery",
            Qr:"qrcode"
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     },
        //     sourceMap: true,
        //     mangle: true
        // }),
        // new HtmlWebpackPlugin({
        //     template: 'dist/index.ejs'
        // })  
    ],  
}