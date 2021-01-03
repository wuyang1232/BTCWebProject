package main

import (
	"BTCWebProject/mysql"
	_ "BTCWebProject/routers"
	"github.com/astaxie/beego"
)

func main() {

	//静态资源映射文件
	beego.SetStaticPath("/js","./static/js")
	beego.SetStaticPath("/img","./static/img")
	beego.SetStaticPath("/css","./static/css")

	//数据库连接
	mysql.Connect()
	//result, err := btc.GetBestBlockHash()
	//if err != nil{
	//	fmt.Println("获取最新区块的hash值错误",err.Error())
	//	return
	//}
	//fmt.Println("最新区块的hash值",result)

	beego.Run()

}

