const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const baseConfig = require('./webpack.config.base');

const config = Object.create(baseConfig);

config.entry = [
    './public/src/containers/app'
];

config.module.loaders.push({
    test: /\.css|\.scss$/,
    loader: ExtractTextPlugin.extract(
        "style-loader",
        'css-loader!sass-loader'
    )
});

config.output = {
    path: path.resolve(__dirname, 'public'),
    filename: '/asset/js/bundle/bundle.min.js',
    publicPath: path.resolve(__dirname, 'public'),
    chunkFilename: "/asset/js/bundle/chunk.[name].min.js",
    libraryTarget: 'var'
};

config.plugins.push(
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin(
    {
        '__DEV__': false,
        'process.env':
        {
            'NODE_ENV': JSON.stringify('production')
        },
        'global': {'GENTLY': false}
    }),
    new webpack.optimize.UglifyJsPlugin(
    {
        compressor:
        {
            screw_ie8: true,
            warnings: false
        }
    }),
    new ExtractTextPlugin('./asset/css/bundle/bundle.min.css',
    {
        allChunks: true
    })
);

config.target = 'electron-renderer';

module.exports = config;
