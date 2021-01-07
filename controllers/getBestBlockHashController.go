package controllers

import (
	"BTCWebProject/btc"
	"fmt"
	"github.com/astaxie/beego"
)

type GetBestBlockHashController struct {
	beego.Controller
}

func (g *GetBestBlockHashController) Get(){

	//通过rpc方法获取最新区块的hash
	bestBlockHash, err := btc.GetBestBlockHash()
	if err != nil{
		fmt.Println("获取最新区块的hash错误")
		fmt.Println(err.Error())
	}
	rows, err := btc.SaveGetBestBlockHash(bestBlockHash)
	if err != nil{
		fmt.Println("最新区块hash储存到数据失败")
		fmt.Println(err.Error())
	}
	fmt.Println("影响到的行数：",rows)
	g.Data["BestBlockHash"] = bestBlockHash
	g.TplName = "getbestblockhash.html"
}
