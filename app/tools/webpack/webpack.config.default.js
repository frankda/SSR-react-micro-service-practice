import path from 'path'

export default {
    entry: path.resolve(process.cwd(), 'app/src/test.ts'),
    module: {
        rules: [
            {
                test: /\.ts[x]?$/,
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
        path: path.resolve(process.cwd(), 'build')
    },
}