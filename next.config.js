const fs = require('fs')
const path = require('path')
const lessToJS = require('less-vars-to-js')

const withLess = require('@zeit/next-less')
const WithCss = require('@zeit/next-css')

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8')
)

if (typeof require !== 'undefined') {
  require.extensions['.less'] = () => {}
}

module.exports = withLess(
  WithCss({
    lessLoaderOptions: {
      modifyVars: themeVariables,
      javascriptEnabled: true,
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

        config.module.rules.unshift({
          test: antStyles,
          use: 'null-loader',
        })
      }
      return config
    },
    exportPathMap: async function (defaultPathMap) {
      return {
        '/': { page: '/' },
        '/blog': { page: '/blog/blog' },
        '/cat': { page: '/cat/cat' },
        '/life': { page: '/life/life' },
      }
    },
  })
)
