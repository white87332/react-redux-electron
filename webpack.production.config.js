const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpackTargetElectronRenderer = require('webpack-target-electron-renderer');
const baseConfig = require('./webpack.config.base');


const config = Object.create(baseConfig);

config.entry = [
    './public/src/containers/app'
];

config.module.loaders.push({
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract(
        "style-loader",
        'css-loader!sass-loader?includePaths[]=' + path.resolve(__dirname, './node_modules/compass-mixins/lib')
    )
});

config.output = {
    path: path.resolve(__dirname, 'public'),
    filename: './asset/js/bundle/bundle.min.js',
    chunkFilename: "./asset/js/bundle/bundle.[name].min.js"
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
        'global': {},
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

config.target = webpackTargetElectronRenderer(config);

module.exports = config;
