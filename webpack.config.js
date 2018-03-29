var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: {
		reduxInit: './src/js/redux-example/init/index.js',
		reduxWithRedux: './src/js/redux-example/with-redux/index.js',
		reduxWithReact: './src/js/redux-example/with-react-redux/index.js',
		reactExample1: './src/js/react/example1/index.js',
		reactExample2: './src/js/react/example2/index.js',
		reactExercice: './src/js/react/exercice/index.js',
	},
    output: {
        filename: '[name].bundle.js'
    },
	devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'react'],
						plugins: ['transform-object-rest-spread', 'transform-class-properties']
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
			template: './src/redux.tpl.html',
			filename: 'reduxInit.html',
			chunks: ['reduxInit']
		}),
		new HtmlWebpackPlugin({
			template: './src/redux.tpl.html',
			filename: 'reduxWithRedux.html',
			chunks: ['reduxWithRedux']
		}),
		new HtmlWebpackPlugin({
			template: './src/reduxWithReact.tpl.html',
			filename: 'reduxWithReact.html',
			chunks: ['reduxWithReact']
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'reactExample1.html',
			chunks: ['reactExample1']
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'reactExample2.html',
			chunks: ['reactExample2']
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'reactExercice.html',
			chunks: ['reactExercice']
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
