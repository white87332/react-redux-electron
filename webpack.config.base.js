const path = require('path');
// const webpack = require('webpack');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel',
                include: path.resolve(__dirname, 'public'),
                exclude: /node_modules/
            }
        ]
    },
    resolveLoader: {
        moduleExtensions: ['-loader']
    },
    plugins: [
        // new webpack.NamedModulesPlugin()
    ],
    externals: [
        // put your node 3rd party libraries which can't be built with webpack here (mysql, mongodb, and so on..)
    ]
};
