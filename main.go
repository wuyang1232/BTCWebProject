package main

import (
	_"BTCWebProject/routers"
	"fmt"
	"github.com/astaxie/beego"
)

func main() {

	//静态资源映射文件
	beego.SetStaticPath("/js","./static/js")
	beego.SetStaticPath("/img","./static/img")
	beego.SetStaticPath("/css","./static/css")
	fmt.Println("hello hanhan")
	beego.Run()
}

