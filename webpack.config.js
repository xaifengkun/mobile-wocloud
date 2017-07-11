var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var extracttextwebpackplugin=require('extract-text-webpack-plugin');//分离css文件
/*
 * 配置当前路径
 */
var ROOT_PATH=path.resolve(__dirname);
var APP_PATH=path.resolve(ROOT_PATH,'app');
var BUILD_PATH=path.resolve(ROOT_PATH,'build');
module.exports = {
	entry: path.resolve(APP_PATH,'app.jsx'), //entry  入口文件 
	/*
	 * output 	
	 */
	output: {
			path:BUILD_PATH,
			filename: 'bundle.js',
			// publicPath:'/__build__'
	},
	module: {
		preLoaders:[
			{
				test:/\.jsx?$/,
				loaders:['eslint'],
				include:APP_PATH
			}
		],
		loaders: [
			{
				test: /\.css$/,
				loader:extracttextwebpackplugin.extract('style-loader','css-loader'),
				include:APP_PATH
			},
			{
				test:/\.jsx?$/,
				loaders:['babel'],
				include:APP_PATH
			}
		]
	},
	/*开启 eval-sourcr-map*/
	devtool:'eval-source-map',
	devServer:{
		historyApiFallback:true,
		hot:true,
		inline:true,
		progress:true,//报错无法识别，删除后也能正常刷新
	},
	resolve:{
		extensions:['','.js','.jsx']
	},
	plugins: [
		new extracttextwebpackplugin("style.css"),
		new HtmlWebpackPlugin(),
		
	]
};
/*
 *   		"plugins":['transform-object-rest-spread']
 */