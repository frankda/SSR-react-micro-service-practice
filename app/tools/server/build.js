import webpack from 'webpack'
import webpackConfig from '../webpack/webpack.config.default.js'

// reference https://webpack.js.org/api/node/
function build(configs) {
    return new Promise((resolve, reject) =>
        webpack(configs).run((err, stats) => {
            if (err || stats.hasErrors()) {
                // handle errors here
                console.log(stats.toString())
                return reject(err)
            }
            return resolve()
        })
    )
}

build(webpackConfig)
