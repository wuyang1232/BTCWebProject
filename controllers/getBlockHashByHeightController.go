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
	//根据数据库中的是否存在该高度的hash
	dhash , err := btc.QueryGetBlockHashByHeight("000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f")
	if err != nil{
		fmt.Println("格局高度查询hash数据库失败")
		fmt.Println(err.Error())
	}
	if dhash == ""{
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
	}else{
		g.Data["Hash"] = dhash
		g.TplName = "getblockhashbyheight.html"
	}

}
