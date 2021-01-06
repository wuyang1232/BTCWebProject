package controllers

import (
	"BTCWebProject/btc"
	"fmt"
	"github.com/astaxie/beego"
)

type GetBlockHeaderController struct {
	beego.Controller
}
func (g *GetBlockHeaderController) Get(){
	//调用rpc方法
	blockHeader, err := btc.GetBlockHeaderByHash("000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f")
	if err != nil{
		fmt.Println(err.Error())
		fmt.Println("调用rpc方法获取区块头信息失败")
	}
	//将获取到的区块头的数据储存到数据库中
	rows, err := blockHeader.SaveGetBlockHeader()
	if err != nil{
		fmt.Println("将getblockheader数据储存到数据库失败")
		fmt.Println(err.Error())
	}
	fmt.Println("影响到的行数：",rows)
	g.Data["BlockHeader"] = blockHeader
	g.TplName = "getblockheader.html"
}
func (g *GetBlockHeaderController) Post(){
	//调用rpc方法
	blockHeader, err := btc.GetBlockHeaderByHash("000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f")
	if err != nil{
		fmt.Println(err.Error())
		fmt.Println("调用rpc方法获取区块头信息失败")
	}
	//将获取到的区块头的数据储存到数据库中
	rows, err := blockHeader.SaveGetBlockHeader()
	if err != nil{
		fmt.Println("将getblockheader数据储存到数据库失败")
		fmt.Println(err.Error())
	}
	fmt.Println("影响到的行数：",rows)
	g.Data["BlockHeader"] = blockHeader
	g.TplName = "getblockheader.html"
}
