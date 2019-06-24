//webpack入口文件
import React from "react";
import ReactDom from "react-dom";
//引入css文件
import "./common/style/main.css";
//在html文件中使用图片
import bgPicture from "./common/images/bg.jpg";
// console.log(bgPicture);  //在浏览器中看到的打印行数并非是第8行，而是17是经过编译后的代码行数
import bgPicture1 from "./common/images/bg1.png";
//或者使用require语法也可以
const bgPicture2 = require("./common/images/bg2.jpg");
//或者在html中直接使用require语法
//外部字体库文件的使用font-awesome
import "font-awesome/css/font-awesome.css";

//render函数接受两个参数，第一个是要添加的元素，第二个是要添加到的那个dom节点
//貌似里面只能有最外层一个div，不能出现与之并列的div，里面再嵌套是不受影响的
ReactDom.render(
	// <div className="rocket">自定义字体rocket测试</div>,
	<div>
		<i class="fa fa-rocket" aria-hidden="true">火箭</i>
		<br />
		<div class="fa fa-rocket">div中嵌套div测试</div>
	</div>,
  document.getElementById("root")
)