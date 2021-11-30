const path = require('path')

module.exports = {
    entry: './app/src/test.ts',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
}