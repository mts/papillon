const path = require('path')

const modulesPath = path.resolve(__dirname, '../packages')

module.exports = ({ config, mode }) => {
  if (mode !== 'DEVELOPMENT') {
    config.plugins = config.plugins.filter(plugin => plugin.constructor.name !== 'UglifyJsPlugin')
  }

  config.module.rules.push({
    test: /\.scss$/,
    loaders: [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          plugins: () => [require('postcss-preset-env')()],
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sassOptions: {
            includePaths: [modulesPath],
          },
        },
      },
    ],
    include: modulesPath,
  })

  return config
}
