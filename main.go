package main

import (
	"BTCWebProject/mysql"
	_ "BTCWebProject/routers"
	"github.com/astaxie/beego"
)

func main() {
	//数据库连接
	mysql.Connect()
	beego.Run()
}

