const path = require('path')
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withImages = require('next-images')

module.exports = {
  webpack (config) {
    ['components', 'sass', 'utils'].map(folder => {
      config.resolve.alias[folder] = path.join(__dirname, 'src', folder)
    })
    return config
  }
}

module.exports = withCSS(withSass({
  webpack (config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    })
    return config
  }
}))

module.exports = withImages({
  esModule: true,
  webpack (config) {
    return config
  }
})
