module.exports = (api) => {
    const presets = [
        "@babel/preset-typescript",
    ]

    // https://babeljs.io/docs/en/config-files#apicache
    api.cache(true)

    return {
        presets,
    }
}