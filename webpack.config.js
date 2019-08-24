'use strict';

var path = require('path');
var pkg = require('./package.json');
var author = pkg.author.name + ' <' + pkg.author.email + '> (' + pkg.author.url + ')';

module.exports = {
    mode: 'production',

    entry: {
        'is-letter': './index.js'
    },

    output: {
        library: 'isLetter',
        libraryTarget: 'umd',
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
    },

    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.js$/,
                loader: 'string-replace-loader',
                query: {
                    multiple: [
                        { search: '$AUTHOR$', replace: author },
                        { search: '$NAME$', replace: pkg.name },
                        { search: '$DESCRIPTION$', replace: pkg.description },
                        { search: '$VERSION$', replace: pkg.version },
                        { search: '$LICENSE$', replace: pkg.license }
                    ]
                }
            }
        ]
    }
};
