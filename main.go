package main

import (
<<<<<<< HEAD
	_"BTCWebProject/routers"
	"fmt"
=======
	"BTCWebProject/mysql"
	_ "BTCWebProject/routers"
>>>>>>> master
	"github.com/astaxie/beego"
)

func main() {

	//静态资源映射文件
	beego.SetStaticPath("/js","./static/js")
	beego.SetStaticPath("/img","./static/img")
	beego.SetStaticPath("/css","./static/css")

	//数据库连接
	mysql.Connect()

	beego.Run()
}

