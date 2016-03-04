const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.development.config');

const app = express();
const compiler = webpack(config);

const PORT = 3000;

app.use(require('webpack-dev-middleware')(compiler,
{
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

app.listen(PORT, 'localhost', err =>
{
    if (err)
    {
        console.log(err);
        return;
    }

    console.log(`Listening at http://localhost:${PORT}`);
});
