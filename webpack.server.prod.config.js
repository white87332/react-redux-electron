const webpack = require('webpack');
const fs = require('fs');
const path = require('path');

function getExternals()
{
    const nodeModules = fs.readdirSync(path.join(process.cwd(), 'node_modules'));
    return nodeModules.reduce(function(ext, mod) {
        ext[mod] = 'commonjs ' + mod;
        return ext;
    }, {});
}

module.exports = {
    target: 'electron',
    entry: path.join(process.cwd(), 'dev/main'),
    output: {
        path: path.join(process.cwd(), 'build'),
        filename: 'main.js',
        chunkFilename: "[name].js"
    },
    externals: getExternals(),
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: 'json-loader'
            }, {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        "es2015", "react", "stage-0"
                    ],
                    plugins: ["transform-decorators-legacy"]
                },
                exclude: /(node_modules)/
            }
        ]
    },
    plugins: [
        new webpack.IgnorePlugin(/\.(css|less|scss|svg|png|jpe?g|png)$/),
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' })
    ]
};
