const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.client.dev.config');

const rootPath = path.normalize(__dirname);

const app = express();
const compiler = webpack(config);
const PORT = 3000;

app.use(express.static(`${rootPath}/public`));
app.use(require('webpack-dev-middleware')(compiler,
    {
        noInfo: true,
        publicPath: config.output.publicPath,
        stats:
        {
            colors: true
        }
    }));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) =>
{
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

/* eslint no-console: ["error", { allow: ["log"] }] */
app.listen(PORT, 'localhost', (err) =>
{
    if (err)
    {
        console.log(err);
        return;
    }

    console.log(`Listening at http://localhost:${PORT}`);
});
