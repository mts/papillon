const path = require("path")
const merge = require("webpack-merge")
const glob = require("glob")
const parts = require("./webpack.parts")

const PATHS = {
  app: path.join(__dirname, "lib"),
  build: path.join(__dirname, "build"),
}

const commonConfig = merge([
  parts.entry(),
  parts.output(),
  parts.plugins(),
  parts.loadJavaScript({ include: PATHS.app }),
])

const developmentConfig = merge([
  parts.devServer({
    host: process.env.HOST,
    port: process.env.PORT,
  }),
])

const productionConfig = merge([
  parts.clean(PATHS.build),
  parts.attachRevision(),
  parts.minifyJavaScript(),

  parts.loadCSS(),

  parts.extractCSS({
    use: ["css-loader", parts.autoprefix()],
  }),

  parts.purifyCSS({
    paths: glob.sync(`${PATHS.app}/**/*.js`, { nodir: true }),
  }),

  parts.minifyCSS({
    options: {
      discardComments: {
        removeAll: true,
      },
    },
  }),
])

module.exports = mode => {
  if (mode === "production") {
    return merge(commonConfig, productionConfig, { mode })
  }

  return merge(commonConfig, developmentConfig, { mode })
}
