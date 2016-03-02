const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpackTargetElectronRenderer = require('webpack-target-electron-renderer');
const baseConfig = require('./webpack.config.base');


const config = Object.create(baseConfig);

config.devtool = 'source-map';

config.entry = [
    './public/src/containers/app'
];

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
    new ExtractTextPlugin('style.css',
    {
        allChunks: true
    })
);

config.target = webpackTargetElectronRenderer(config);

module.exports = config;
