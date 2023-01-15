const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, "./src", "index.js"),
  output: {
    path: path.resolve(__dirname, "build"),
	publicPath: '/',
	filename: 'index.bundle.js',
  },
	resolve: {
		alias: {
			components: path.resolve(__dirname, 'src'),
		},
		extensions: ['.js', '.jsx'],
	},
	devServer: {
		hot: true,
		open: true
	},
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
		  options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
      },
	  { 
		test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
		use: ["file-loader"] 
	},
    ]
  },
  module: {
	rules: [
	  {
		test: /\.png/,
		type: 'asset/resource'
	  }
	]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}