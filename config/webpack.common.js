var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
    entry: {
        'app': helpers.root('src/vendor.js')
    },
    module: {
        loaders: [
            {
                test: /.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!sass'),
                 exclude: /node_modules/
            }, {
                test: /\.(css)$/,
                loader: ExtractTextPlugin.extract('style', 'css'),
                exclude: /node_modules/
            },  {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'url-loader?limit=12288&name=[path][name].[ext]',
                exclude: /node_modules/
            }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app']
        }),


        new HtmlWebpackPlugin({
            template: 'src/index.html',
            minify: {collapseWhitespace: true}
        })
    ]
}
