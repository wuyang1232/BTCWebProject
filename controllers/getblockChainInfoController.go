package controllers

import (
	"BTCWebProject/btc"
	"fmt"
	"github.com/astaxie/beego"
)

type GetBlockChainInfoController struct {
	beego.Controller
}

func (g *GetBlockChainInfoController) Get(){
	//通过rpc方法获取区块链连接信息
	blockChainInfo, err := btc.GetBlockChainInfo()
	if err != nil{
		fmt.Println("获取区块链连接信息失败")
		fmt.Println(err.Error())
	}
	//将获取的信息保存到数据库中
	rows, err := blockChainInfo.SaveGetBlockChainInfo()
	if err != nil{
		fmt.Println("获取区块链连接信息保存失败")
		fmt.Println(err.Error())
	}
	fmt.Println("影响的行数：",rows)
	g.Data["BlockChainInfo"] = blockChainInfo
	g.TplName = "getblockchaininfo.html"
}
