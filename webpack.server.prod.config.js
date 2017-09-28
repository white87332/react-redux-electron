const webpack = require('webpack');
const fs = require('fs');
const path = require('path');

function getExternals()
{
    const nodeModules = fs.readdirSync(path.join(process.cwd(), 'node_modules'));
    return nodeModules.reduce((ext, mod) => {
        ext[mod] = `commonjs ${mod}`;
        return ext;
    }, {});
}

module.exports = {
    target: 'electron',
    entry: path.join(process.cwd(), 'dev/main'),
    output: {
        path: path.join(process.cwd(), 'build'),
        filename: 'main.js',
        chunkFilename: '[id].js'
    },
    externals: getExternals(),
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['transform-decorators-legacy']
                },
                exclude: /(node_modules)/
            }
        ],
        exprContextCritical: false
    },
    plugins: [
        new webpack.IgnorePlugin(/\.(css|less|scss|svg|png|jpe?g|png)$/),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        })
    ]
};
