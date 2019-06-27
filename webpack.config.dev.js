//采用common.js语法，也就是node.js语法
const path = require("path");
//引入html-webpack-plugin插件，打包之后会在dist目录下面自动生成一个index.html文件
const HtmlWebpackPlugin = require("html-webpack-plugin");
//因为webpack这个文件使用的是node.js的语法，所以不能使用export defaule的es6语法
module.exports = {
  entry: "./src/main.js", //webapck解析入口文件 //webpack打包之后文件输出路径
  output: {
    path: path.resolve("__dirname", "dist"), //这里的输出路径需要使用绝对路径
    filename: "main.js" //输出的打包文件名称
  },
  mode: "development", //webpack4以上的版本需要配置此对象
  plugins: [
		new HtmlWebpackPlugin({  //以template为模板生成一个新的html文件
				filename: "index.html",
				template: "src/index.html"
			}
		)
  ],
  module: {
    //匹配规则，寻找js文件，并使用use使用对应的loader来解析此js文件
    //具体是babel-loader以及对应的库babel-core
    rules: [
			{
				test: /\.js$/,
				use: [{
					loader: "babel-loader",
					options: {
						presets: ["react"]
					}
				}]
			},
			{
				test: /\.css$/, //这里无需再做多的配置，直接use: ["css-loader"]即可
				use: ["style-loader",
					{
						loader: "css-loader",
						options: {  //css模块化，true表示开启模块化，在此之前如果单纯设置为true的话module-test样式是不生效的
							modules: true
						}
					}
				],
				// 这样写的结果就是没有规则来匹配css-loader了，暂时解决方法是再写一套规则
				exclude: [
					path.resolve(__dirname,"node_modules"),
					path.resolve(__dirname,"src/common")
				]
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
				include: [
					path.resolve(__dirname, "node_modules"),
					path.resolve(__dirname, "src/common")
				]
			},
			{
				test: /\.(jpg|png|gif|jpeg)$/, //这里无需再做多的配置，直接use: ["css-loader"]即可
				// use: ["url-loader"]  //limit单位是kbe
				use: [{
					loader: "url-loader",
					options: {
						limit: 10000
					}
				}]
			},
			{
				test: /\.(ttf|eot|woff|woff2|svg|otf)$/,
				use: ["file-loader"]
			}
	]
	},
	devServer: {
		open: false,  //运行npm run dev命令后会自动在浏览器中打开为true时
		port: 9000
	}
}