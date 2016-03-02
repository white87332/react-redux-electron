const webpack = require('webpack');
const webpackTargetElectronRenderer = require('webpack-target-electron-renderer');
const baseConfig = require('./webpack.config.base');


const config = Object.create(baseConfig);

config.debug = true;

config.devtool = 'cheap-module-eval-source-map';

config.entry = [
    'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
    './public/src/containers/app'
];

config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin(
    {
        '__DEV__': true,
        'process.env':
        {
            'NODE_ENV': JSON.stringify('development')
        },
        'global':
        {},
    })
);

config.target = webpackTargetElectronRenderer(config);

module.exports = config;
