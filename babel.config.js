module.exports = (api) => {
    const presets = [
        "@babel/preset-typescript",
    ]

    api.cache(true)

    return {
        presets,
    }
}