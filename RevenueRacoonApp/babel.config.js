const path = require('path');

module.exports = {
  entry: './src/App.js', // Adjust the entry point based on your project structure
  output: {
    path: path.resolve(__dirname, 'dist'), // Adjust the output directory as needed
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
