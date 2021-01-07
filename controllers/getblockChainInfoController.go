package controllers

import (
	"BTCWebProject/btc"
	"BTCWebProject/modles"
	"fmt"
	"github.com/astaxie/beego"
)

type GetBlockChainInfoController struct {
	beego.Controller
}

func (g *GetBlockChainInfoController) Get(){
	//查询数据库中是否存在区块链连接信息
	block := &modles.BlockChainInfo{
		Chain:                "",
		Blocks:               0,
		Headers:              0,
		Bestblockhash:        "",
		Difficulty:           0,
		Mediantime:           0,
		Verificationprogress: 0,
		Initialblockdownload: false,
		Chainwork:            "",
		Size_on_disk:         0,
		Pruned:               false,
		Warnings:             "",
	}
	block, err := block.QueryGetBlockChainInfo()
	if err != nil{
		fmt.Println("查询数据库中是否存在区块链连接信息失败")
		fmt.Println(err.Error())
	}
	if block == nil{
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
	}else{
		g.Data["BlockChainInfo"] = block
		g.TplName = "getblockchaininfo.html"
	}

}
