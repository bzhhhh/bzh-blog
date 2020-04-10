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
  })
)
