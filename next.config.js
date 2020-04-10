const fs = require('fs')
const path = require('path')
const lessToJS = require('less-vars-to-js')

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8')
)

module.exports = {
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style.*?/
      const origExternals = [...config.externals]
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback()
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ]

      // config.module.rules.unshift({
      //   test: antStyles,
      //   use: 'null-loader',
      // })

      config.module.rules.unshift({
        test: /\.less$/,
        use: 'less-loader' // compiles Less to CSS
      })

    }
    return config
  }
}