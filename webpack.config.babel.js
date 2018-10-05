import 'babel-register';
import { join, resolve } from 'path';
import { lstatSync, readdirSync } from 'fs';
import webpack from 'webpack';
import CleanPlugin from 'clean-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export default function (env) {
  const cssModuleNames = '[name]_[local]_[hash:base64:3]';
  const target = process.env.npm_lifecycle_event;
  const rootDir = resolve(__dirname);
  const packagesDir = resolve(rootDir, 'packages');

  let entries;

  if (env && env.package) {
    const packageName = env.package;
    entries = {
      [`${packageName}/lib/${packageName}`]: join(packagesDir, packageName),
    };
  } else {
    const isDirectory = source => lstatSync(source.path).isDirectory();
    const hasIndex = source => readdirSync(source.path).find(name => name === 'index.js');

    const getDirectories = source =>
      readdirSync(source)
        .map(name => ({ name, path: join(source, name) }))
        .filter(isDirectory)
        .filter(hasIndex);

    entries = getDirectories(packagesDir).reduce(
      (acc, dir) => ({
        ...acc,
        [`${dir.name}/lib/${dir.name}`]: dir.path,
      }),
      {},
    );
  }

  const plugins = [
    new webpack.EnvironmentPlugin({ NODE_ENV: 'production' }),
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true,
    }),
  ];

  const prodPlugins =
    process.env.NODE_ENV === 'production'
      ? [new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })]
      : [];

  const jsLoaders = [{ loader: 'babel-loader' }];
  const cssLoaderConfig = [
    {
      loader: 'css-loader',
      options: {
        modules: true,
        importLoaders: 1,
        localIdentName: cssModuleNames,
        discardComments: true,
        sourceMap: true,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: true,
      },
    },
    {
      loader: 'sass-loader',
      options: {
        outputStyle: 'compressed',
        sourcemaps: true,
      },
    },
  ];

  const loaders = [
    {
      test: /\.js$/,
      include: Object.values(entries),
      use: jsLoaders,
    },
    {
      test: /\.svg$/,
      loader: 'svg-inline-loader',
    },
    {
      test: /\.(ttf|eot|woff(2)?)$/,
      include: Object.values(entries),
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '/typography/[name]-[hash:base64:12].[ext]',
          },
        },
      ],
    },
    {
      test: /\.(jpe?g|png|gif)$/i,
      include: Object.values(entries),
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '/img/[name]-[hash:base64:12].[ext]',
          },
        },
      ],
    },
    {
      test: /\.(css|scss)$/,
      include: Object.values(entries),
      loaders: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: cssLoaderConfig,
      }),
    },
  ];

  if (target === 'bundle') {
    plugins.push(new BundleAnalyzerPlugin());
  }

  const configuration = {
    devtool: 'cheap-module-source-map',
    context: rootDir,
    output: {
      path: packagesDir,
      libraryTarget: 'umd',
      filename: '[name].js',
      sourceMapFilename: '[file].map',
    },
    plugins: [...plugins, ...prodPlugins],
    resolveLoader: {
      modules: ['node_modules'],
    },
    module: {
      rules: [...loaders],
    },
    externals: {
      'prop-types': true,
      'classnames': true,
      react: true,
      'react-dom': true,
    },
  };

  return {
    ...configuration,
    entry: entries,
    plugins: [
      ...configuration.plugins,
      new CleanPlugin(Object.values(entries).map(value => `${value}/lib/`), {
        dry: false,
        verbose: true,
        root: packagesDir,
      }),
    ],
  };
}
