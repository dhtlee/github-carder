module.exports = {
  entry: __dirname,
  output: {
    filename: 'bundle.js'
  },
  module: {
  rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
}
