//webpack入口文件
import React from "react";
import ReactDom from "react-dom";
//引入css文件
import "./common/style/main.css";
//在html文件中使用图片
import bgPicture from "./common/images/bg.jpg";
// console.log(bgPicture);  //在浏览器中看到的打印行数并非是第8行，而是17是经过编译后的代码行数

//render函数接受两个参数，第一个是要添加的元素，第二个是要添加到的那个dom节点
ReactDom.render(   
	<div> React Test12 
		<img src={bgPicture} />
	</div>,
  document.getElementById("root")
)