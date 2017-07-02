var path = require('path');
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.join(__dirname, 'index'),
	output: {
			path:__dirname+ '/__build__',
			filename: 'bundle.js',
			publicPath:'/__build__'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loaders: ['style', 'css']
			}
		]
	},
	devServer:{
		historyApiFallback:true,
		hot:true,
		inline:true,
		progress:true,//报错无法识别，删除后也能正常刷新
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'wocloud'
		}),
		new webpack.HotModuleReplacementPlugin(),
	]
};