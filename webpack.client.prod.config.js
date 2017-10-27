const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const baseConfig = require('./webpack.config.base');

const config = Object.assign({}, baseConfig);

config.entry = [
    './public/src/containers/app'
];

config.module.rules.push({
    test: /\.(jpe?g|png|gif|svg)$/i,
    loader: 'url-loader?limit=1&name=/server/asset/img/[name].[ext]'
});

config.module.rules.push({
    test: /\.css|\.scss$/,
    use: ExtractTextPlugin.extract({
        use: [{
            loader: 'css-loader'
        },
        {
            loader: 'sass-loader'
        }]
    }),
});

config.output = {
    path: `${process.cwd()}/public/bundle/js/`,
    filename: 'bundle.min.js',
    publicPath: `${process.cwd()}/public/bundle/js/`,
    chunkFilename: 'chunk.[id].min.js',
    libraryTarget: 'var'
};

config.plugins.push(
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin(
        {
            __DEV__: false,
            'process.env':
            {
                NODE_ENV: JSON.stringify('production')
            },
            global: { GENTLY: false }
        }),
    new webpack.optimize.UglifyJsPlugin(
        {
            compressor:
            {
                screw_ie8: true,
                warnings: false
            }
        }),
    new ExtractTextPlugin({
        filename: '../css/bundle.min.css',
        allChunks: true
    })
);

config.target = 'electron-renderer';

module.exports = config;
