package main

import (
	"BTCWebProject/btc"
	_"BTCWebProject/routers"
	"BTCWebProject/mysql"
	"fmt"
	"github.com/astaxie/beego"
)

func main() {

	//静态资源映射文件
	beego.SetStaticPath("/js","./static/js")
	beego.SetStaticPath("/img","./static/img")
	beego.SetStaticPath("/css","./static/css")

	//数据库连接
	mysql.Connect()
	blockHeaders,err := btc.GetBlockHeaderByHash("000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f")
	if err != nil {
		fmt.Println(err.Error())
	}
	fmt.Println("heder:",blockHeaders)
	row,err := blockHeaders.SaveGetBlockHeader()
	if err != nil {
		fmt.Println("保存数据失败：",err.Error())
	}
	fmt.Println("影响的行数：",row)
	beego.Run()
}

