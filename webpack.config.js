//采用common.js语法，也就是node.js语法
const path = require("path");
//因为webpack这个文件使用的是node.js的语法，所以不能使用export defaule的es6语法
module.exports = {
  entry: "./src/main.js", //webapck解析入口文件 //webpack打包之后文件输出路径
  output: {
    path: path.resolve("__dirname", "dist"), //这里的输出路径需要使用绝对路径
    filename: "main.js"
  }
}