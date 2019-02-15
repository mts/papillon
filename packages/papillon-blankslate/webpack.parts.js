/* eslint global-require: 0 */

const webpack = require("webpack")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const GitRevisionPlugin = require("git-revision-webpack-plugin")
const UglifyWebpackPlugin = require("uglifyjs-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const PurifyCSSPlugin = require("purifycss-webpack")
const cssnano = require("cssnano")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const path = require("path")

exports.devServer = ({ host, port } = {}) => ({
  devServer: {
    stats: "errors-only",

    host,
    port,
    open: true,

    overlay: true,

    watchOptions: {
      aggregateTimeout: 300,

      poll: 1000,
    },

    contentBase: './build',
    hot: true,
  },
})

exports.entry = () => ({
  entry: './index.js',
})

exports.output = () => ({
  output: {
    libraryTarget: 'umd',
    library: 'PapillonBlankslate',
    path: path.join(__dirname, './build'),
    filename: 'papillon-blankslate.js',
  },
})

exports.plugins = () => ({
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
})

exports.loadJavaScript = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        include,
        exclude,

        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-syntax-dynamic-import',
              '@babel/plugin-transform-runtime',
              '@babel/plugin-transform-spread',
            ],
          },
        },
      },
    ],
  },
})

exports.clean = pluginPath => ({
  plugins: [new CleanWebpackPlugin([pluginPath])],
})

exports.attachRevision = () => ({
  plugins: [
    new webpack.BannerPlugin({
      banner: new GitRevisionPlugin().version(),
    }),
  ],
})

exports.minifyJavaScript = () => ({
  optimization: {
    minimizer: [new UglifyWebpackPlugin({ sourceMap: true })],
  },
})

exports.loadCSS = ({ include, exclude } = {}) => ({
  module: {
    rules: [
        // ### Loading CSS
        {
          test: /\.css$/,
          include,
          exclude,

          use: [
            "style-loader",
            "css-loader",
            // ### PostCSS
            {
              loader: "postcss-loader",
              options: {
                // ### PostCSS
                // plugins: () => ([
                //   require("autoprefixer"),
                //   require("precss"),
                // ]),
                // ### cssnext
                plugins: () => [require("postcss-cssnext")()],
              },
            },
          ],
        },
        // ### Loading Less
        {
          test: /\.less$/,
          use: ["style-loader", "css-loader", "less-loader"],
        },
        // ### Loading Sass
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        // ### Loading Stylus and Yeticss
        {
          test: /\.styl$/,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "stylus-loader",
              options: {
                use: [require("yeticss")],
              },
            },
          ],
        },
    ],
  },
})

exports.extractCSS = ({ include, exclude, use = [] }) => {
  // Output extracted CSS to a file
  const plugin = new MiniCssExtractPlugin({
    // ### Setting Up Hashing
    filename: "[name].[contenthash:4].css",
  })

  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include,
          exclude,

          use: [
            MiniCssExtractPlugin.loader,
          ].concat(use),
        },
      ],
    },
    plugins: [plugin],
  }
}

exports.purifyCSS = ({ paths }) => ({
  plugins: [new PurifyCSSPlugin({ paths })],
})

exports.autoprefix = () => ({
  loader: "postcss-loader",
  options: {
    plugins: () => [require("autoprefixer")()],
  },
})

exports.minifyCSS = ({ options }) => ({
  plugins: [
    new OptimizeCSSAssetsPlugin({
      cssProcessor: cssnano,
      cssProcessorOptions: options,
      canPrint: false,
    }),
  ],
})
