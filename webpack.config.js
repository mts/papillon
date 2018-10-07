const path = require("path");
const merge = require("webpack-merge");
const glob = require("glob");

const parts = require("./webpack.parts");

const PATHS = {
  app: path.join(__dirname, "src"),
  build: path.join(__dirname, "dist"),
};

const commonConfig = merge([
  // ### Configuring html-webpack-plugin
  parts.plugins(),

  // ### Choosing One Format
  // ### Manipulating file-loader Output Path and publicPath
  parts.loadFonts(),

  // ### Using Babel with Webpack Configuration
  parts.loadJavaScript({ include: PATHS.app }),

  // ### Setting process.env.NODE_ENV
  parts.setFreeVariable("HELLO", "hello from config"),

]);

const productionConfig = merge([
  // ### Setting Up MiniCssExtractPlugin
  // ### Connecting with Configuration
  parts.extractCSS({
    use: ["css-loader", parts.autoprefix()],
  }),

  // ### Enabling PurifyCSS
  // The order matters. CSS extraction has to happen before purifying.
  parts.purifyCSS({
    paths: glob.sync(`${PATHS.app}/**/*.js`, { nodir: true }),
  }),

  // ### Integrating Images to the Project
  parts.loadImages({
    options: {
      limit: 15000,
      name: "[name].[ext]",
    },
  }),

  // ### Enabling Source Maps
  parts.generateSourceMaps({ type: "source-map" }),


  // ### Setting Up a vendor Bundle
  // ### Controlling Bundle Splitting
  {
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendor",
            chunks: "initial",
          },
        },
      },

      // ### Extracting a Manifest
      runtimeChunk: {
        name: "manifest",
      },
    },
  },

  // ### Cleaning the Build Directory
  parts.clean(PATHS.build),

  // ### Attaching a Revision to the Build
  parts.attachRevision(),

  // ### Minifying JavaScript
  parts.minifyJavaScript(),

  // ### Minifying CSS
  // #### Setting Up CSS Minification
  parts.minifyCSS({
    options: {
      discardComments: {
        removeAll: true,
      },
      // // Run cssnano in safe mode to avoid
      // // potentially unsafe transformations.
      // safe: true,
      // // Error: Option safe was removed. Use parser: require("postcss-safe-parser")
    },
  }),

  // ### Setting Up Hashing
  {
    output: {
      chunkFilename: "[name].[chunkhash:4].js",
      filename: "[name].[chunkhash:4].js",
    },
  },

  // ### Setting Up Hashing
  parts.loadImages({
    options: {
      limit: 15000,

      // name: "[name].[ext]",


      name: "[name].[hash:4].[ext]",

    },
  }),

  // ### Using Records
  { recordsPath: path.join(__dirname, "records.json") },

  // ### Enabling a Performance Budget
  {
    performance: {
      hints: "warning", // "error" or false are valid too
      maxEntrypointSize: 50000, // in bytes, default 250k
      maxAssetSize: 450000, // in bytes
    },
  },
]);

const developmentConfig = merge([
  parts.devServer({
    // Customize host/port here if needed
    host: process.env.HOST,
    port: process.env.PORT,
  }),

  // ### Setting Up MiniCssExtractPlugin
  // ### Connecting with Configuration
  parts.loadCSS(),

  // ### Integrating Images to the Project
  parts.loadImages(),
]);

module.exports = mode => {
  if (mode === "production") {
    return merge(commonConfig, productionConfig, { mode });
  }

  return merge(commonConfig, developmentConfig, { mode });
};
