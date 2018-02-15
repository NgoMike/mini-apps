var path = require('path');
var webpack = require('webpack');

module.exports = {
entry: './client/app.jsx',

output: {
    // dist folder from webpack
    path: path.resolve(__dirname, 'dist'),
    //dist compiled location
    filename: 'compiled/app.js'
},

module: {
    loaders: [
        {
            // the char in front of regex '?' = optional. So checks js and jsx
            test: /\.jsx?$/,
            loader: 'babel-loader',
            query: {
                // converts es6 to es5 with @babel & @babel/react
                presets: ['@babel/es2015', '@babel/react']
            },
            include: path.resolve(__dirname, './client/app.jsx')
        }
    ]
},

stats: {
    colors: true
},

devtool: 'source-map'
};