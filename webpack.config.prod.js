const common = require("./webpack.config.common")
const merge = require("webpack-merge")

module.exports = merge.smart(common, {
  mode: "production",
})
