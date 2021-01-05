package controllers

import (
	"BTCWebProject/btc"
	"fmt"
	"github.com/astaxie/beego"
)

type GetBlockHashByHeight struct {
	beego.Controller
}

func (g *GetBlockHashByHeight) Get(){
	//通过rpc方法获取hash值
	hash, err := btc.GetBlockHashByHeight(0)
	if err != nil{
		fmt.Println("根据高度获取hash错误")
		fmt.Println(err.Error())
	}
	rows, err := btc.SaveGetBlockHashByHeight(hash)
	if err != nil{
		fmt.Println("根据高度获取hash保存到数据库失败")
		fmt.Println(err.Error())
	}
	fmt.Println("影响到的行数：",rows)
	g.Data["Hash"] = hash
	g.TplName = "getblockhashbyheight.html"
}
