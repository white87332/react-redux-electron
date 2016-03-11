const path = require('path');
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

config.output = {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000/public/asset/js/bundle/',
    chunkFilename: "chunk.[name].js"
};

config.module.loaders.push({
    test: /\.css|\.scss$/,
    loader: "style-loader!css-loader!sass-loader?includePaths[]=" + path.resolve(__dirname, "./node_modules/compass-mixins/lib")
});

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
        'global': {'GENTLY': false}
    })
);

config.target = webpackTargetElectronRenderer(config);

module.exports = config;
