/* eslint global-require : 0 */
/* eslint no-unused-vars : 0 */
/* eslint no-shadow : 0 */

// const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurifyCSSPlugin = require("purifycss-webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const GitRevisionPlugin = require("git-revision-webpack-plugin");
const UglifyWebpackPlugin = require("uglifyjs-webpack-plugin");
const cssnano = require("cssnano");
const HappyPack = require("happypack");

exports.devServer = ({ host, port } = {}) => ({
  // ### Configuring WDS Through Webpack Configuration
  devServer: {
    // Display only errors to reduce the amount of output.
    stats: "errors-only",

    // Parse host and port from env to allow customization.
    //
    // If you use Docker, Vagrant or Cloud9, set
    // host: options.host || "0.0.0.0";
    //
    // 0.0.0.0 is available to all network devices
    // unlike default `localhost`.
    host, // Defaults to `localhost`
    port, // Defaults to 8080
    open: true, // Open the page in browser

    // ### Enabling Error Overlay
    overlay: true,

    // ### Polling Instead of Watching Files
    watchOptions: {
      // Delay the rebuild after the first change
      aggregateTimeout: 300,

      // Poll using interval (in ms, accepts boolean too)
      poll: 1000,
    },
  },
});

exports.plugins = () => ({
    plugins: [
      // new HtmlWebpackPlugin({
      //   title: "Webpack demo",
      // }),

      // ### Polling Instead of Watching Files
      // Ignore node_modules so CPU usage with poll
      // watching drops significantly.
      new webpack.WatchIgnorePlugin([
        path.join(__dirname, "node_modules"),
      ]),

      // ### Disabling Code Splitting
      // new webpack.optimize.LimitChunkCountPlugin({
      //   maxChunks: 1,
      // }),

      // ### High-Level Optimizations
      new HappyPack({
        loaders: [
          // Capture Babel loader
          "babel-loader",
        ],
      }),
    ],
});

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
          use: [
            "style-loader",
            "css-loader",
            "sass-loader",
          ],
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
});

exports.extractCSS = ({ include, exclude, use = [] }) => {
  // Output extracted CSS to a file
  const plugin = new MiniCssExtractPlugin({
    // ### Setting Up Hashing
    filename: "[name].[contenthash:4].css",
  });

  return {
    // module: {
    //   rules: [
    //     {
    //       test: /\.css$/,
    //       include,
    //       exclude,

    //       use: [
    //         MiniCssExtractPlugin.loader,
    //       ].concat(use),
    //     },
    //   ],
    // },
    //

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
          use: [
            "style-loader",
            "css-loader",
            "sass-loader",
          ],
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

    plugins: [plugin],
  };
};

exports.purifyCSS = ({ paths }) => ({
  plugins: [new PurifyCSSPlugin({ paths })],
});

exports.autoprefix = () => ({
  loader: "postcss-loader",
  options: {
    plugins: () => [require("autoprefixer")()],
  },
});

exports.loadImages = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [
      // ### Integrating Images to the Project
      {
        test: /\.(png|jpg)$/,
        include,
        exclude,
        use: {
          loader: "url-loader",
          options,
        },
      },
      // ### Loading SVGs
      {
        test: /\.svg$/,
        use: "file-loader",
      },
    ],
  },
});

exports.loadFonts = () => ({
  module: {
    rules: [
      {
        // Match woff2 and patterns like .woff?v=1.1.1.
        test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 50000,
            mimetype: "application/font-woff",
            name: "./fonts/[name].[ext]", // Output below ./fonts
            publicPath: "../", // Take the directory into account
          },
        },
      },
    ],
  },
});

// exports.loadJavaScript = ({ include, exclude } = {}) => ({
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         include,
//         exclude,

//         use: "babel-loader",
//         // ### High-Level Optimizations
//         // loader: "happypack/loader",
//       },
//     ],
//   },
// });

exports.loadJavaScript = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        // include,
        // exclude,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/react",
              ],
              plugins: [
                "@babel/plugin-transform-spread",

                // // Support for the experimental syntax 'decorators-legacy' isn't currently enabled
                // // https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy
                // ["@babel/plugin-proposal-decorators", { "legacy": true }],

                // // Support for the experimental syntax 'dynamicImport'
                // // https://github.com/babel/babel/tree/master/packages/babel-plugin-syntax-dynamic-import
                // "@babel/plugin-syntax-dynamic-import",
              ],
            },
          },
        ],
      },
    ],
  },
});

exports.generateSourceMaps = ({ type }) => ({
  devtool: type,
});

exports.clean = path => ({
  plugins: [new CleanWebpackPlugin([path])],
});

exports.attachRevision = () => ({
  plugins: [
    new webpack.BannerPlugin({
      banner: new GitRevisionPlugin().version(),
    }),
  ],
});

exports.minifyJavaScript = () => ({
  optimization: {
    minimizer: [new UglifyWebpackPlugin({ sourceMap: true })],
  },
});

const OptimizeCSSAssetsPlugin = require(
  "optimize-css-assets-webpack-plugin",
);

exports.minifyCSS = ({ options }) => ({
  plugins: [
    new OptimizeCSSAssetsPlugin({
      cssProcessor: cssnano,
      cssProcessorOptions: options,
      canPrint: false,
    }),
  ],
});

exports.setFreeVariable = (key, value) => {
  const env = {};
  env[key] = JSON.stringify(value);

  return {
    plugins: [new webpack.DefinePlugin(env)],
  };
};
