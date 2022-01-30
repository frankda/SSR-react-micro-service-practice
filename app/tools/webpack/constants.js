import path from 'path'

// no __dirname here, path.resolve() will return __dirname in ES modules
// https://nodejs.org/docs/latest-v15.x/api/esm.html#esm_no_filename_or_dirname
const buildPath = path.resolve(process.cwd(), 'build')
const rootPath = path.resolve(process.cwd())

export { buildPath, rootPath }