const path = require('path');
const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');


const config = Object.create(baseConfig);

config.debug = true;

config.devtool = 'cheap-module-eval-source-map';

config.entry = [
    'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr', //electron
    // 'webpack-hot-middleware/client', //web
    './public/src/containers/app'
];

config.output = {
    path: '/asset/js/bundle/',
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000/public/asset/js/bundle/',
    chunkFilename: "chunk.[name].js",
    libraryTarget: 'commonjs2'
};

config.module.loaders.push({
    test: /\.css|\.scss$/,
    loader: "style-loader!css-loader!sass-loader"
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

config.target = 'electron-renderer';

module.exports = config;
