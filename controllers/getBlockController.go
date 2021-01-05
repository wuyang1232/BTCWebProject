package controllers

import (
	"BTCWebProject/btc"
	"fmt"
	"github.com/astaxie/beego"
)

type GetBlockController struct {
	beego.Controller
}

func (g *GetBlockController) Get(){
	block, err := btc.GetBlockByHash("000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f")
	if err != nil{
		fmt.Println(err.Error())
		fmt.Println("getblock中获取数据失败")
		return
	}
	rows, err := block.SaveGetBlockData()
	if err != nil{
		fmt.Println(err.Error())
		fmt.Println("将数据库中的数据转接到页面的过程出现问题")
		return
	}
	fmt.Println("影响到的行数：",rows)
	fmt.Println("getblock:",block)
	g.Data["Block"] = block
	g.TplName = "getblock.html"
}
