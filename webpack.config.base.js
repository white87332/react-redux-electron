const path = require('path');

module.exports = {
    module:
    {
        loaders: [
        {
            test: /\.js?$/,
            loader: 'babel',
            include: path.resolve(__dirname, 'public'),
            exclude: /node_modules/
        },
        {
            test: /\.json$/,
            loader: "json-loader"
        },
        {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        },
        {
            test: /\.scss$/,
            loader: "style-loader!css-loader!sass-loader?includePaths[]=" + path.resolve(__dirname, "./node_modules/compass-mixins/lib")
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: 'url-loader?limit=8192&name=./asset/img/[name].[ext]'
        }]
    },
    output:
    {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/public/asset/js/bundle/',
        chunkFilename: "./asset/js/bundle/bundle.[name].js"
        // libraryTarget: 'commonjs2'
    },
    resolve:
    {
        extensions: ['', '.js', '.jsx'],
        packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
    },
    plugins: [

    ],
    externals: [
        // put your node 3rd party libraries which can't be built with webpack here (mysql, mongodb, and so on..)
    ]
};
