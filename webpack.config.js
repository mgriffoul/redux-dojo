var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: './src/js/main.js',
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000
	},
    output: {
        filename: 'main.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env'],
						plugins: ['transform-object-rest-spread']
					}
				}
            }
        ]
    },
	plugins: [
		new HtmlWebpackPlugin ({
			inject: true,
			template: './src/index.html',
			filename: './index.html'
		})
	],
};
