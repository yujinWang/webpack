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

//render函数接受两个参数，第一个是要添加的元素，第二个是要添加到的那个dom节点
ReactDom.render(   
	<div> React Test12 
		<img src={bgPicture} />
		<img src={bgPicture1} />
		<img src={bgPicture2} />
		<img src={require("./common/images/bg1.png")} />
	</div>,
  document.getElementById("root")
)