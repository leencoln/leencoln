var path = require('path');

module.exports = {
    entry: './main.js',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['env']
                }
            }
        ]
    }
};