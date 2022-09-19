const path = require('path');

module.exports = {
  entry: './src/script/script.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};