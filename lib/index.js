'use strict'

const postcss = require('postcss')
const Px2rem = require('px2rem')

module.exports = (options = {}) => {
  return {
    postcssPlugin: 'postcss-px2rem',
    Once(root, { result }) {
      const oldCssText = root.toString()
      const px2remIns = new Px2rem(options)
      const newCssText = px2remIns.generateRem(oldCssText)
      const newCssObj = postcss.parse(newCssText)
      result.root = newCssObj
    }
  }
}
module.exports.postcss = true
