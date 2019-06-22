//webpack入口文件
import React from "react";
import ReactDom from "react-dom";
//引入css文件
import "./common/style/main.css";

//render函数接受两个参数，第一个是要添加的元素，第二个是要添加到的那个dom节点
ReactDom.render(   
	<div> React Test12 </div>,
  document.getElementById("root")
)