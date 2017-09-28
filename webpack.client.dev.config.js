const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');

const config = Object.assign({}, baseConfig);

// config.devtool = 'inline-source-map';

config.entry = [
    // 'webpack-hot-middleware/client?path=http://127.0.0.1:3000/__webpack_hmr', // electron
    'webpack-hot-middleware/client', //web
    './public/src/containers/app'
];

config.output = {
    // bundle
    path: '/bundle/js/',
    filename: 'bundle.js',

    // chunk
    publicPath: 'http://127.0.0.1:3000/public/bundle/js/',
    chunkFilename: 'chunk.[id].js',

    libraryTarget: 'var'
};

config.module.rules.push({
    test: /\.(jpe?g|png|gif|svg)$/i,
    loader: 'url-loader?limit=1'
});

config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin(
        {
            __DEV__: true,
            'process.env':
            {
                NODE_ENV: JSON.stringify('development')
            },
            global: { GENTLY: false }
        })
);

config.target = 'electron-renderer';

module.exports = config;
