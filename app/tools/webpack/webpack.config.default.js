import path from 'path'
import { buildPath, rootPath } from './constants.js'

export default {
    entry: path.resolve(process.cwd(), 'app/src/test.ts'),
    mode: 'development',
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
        path: path.resolve(buildPath, 'public/assets'),
        publicPath: '/assets/'
    },
}