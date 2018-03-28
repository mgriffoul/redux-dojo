var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: {
		page1: './src/js/page1.js',
		page2: './src/js/page2.js'
	},
    output: {
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'react'],
						plugins: ['transform-object-rest-spread']
					}
				}
            }
        ]
    },
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
			chunks: []
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'page1.html',
			chunks: ['page1']
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'page2.html',
			chunks: ['page2']
		}),
	],
	resolve: {
		extensions: ['.js','.jsx']
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000,
		open: true
	},
};
