// reference https://webpack.js.org/api/node/
const webpack = require('webpack')
const path = require('path')
const webpackConfig = require('../webpack/webpack.config.default')

function build(configs) {
    return new Promise((resolve, reject) =>
        webpack(configs).run((err, stats) => {
            if (err) {
                return reject(err)
            }
            return resolve()
        })
    )
}

build(webpackConfig)

  