package controllers

import (
	"BTCWebProject/btc"
	"BTCWebProject/modles"
	"fmt"
	"github.com/astaxie/beego"
)

type GetBlockHeaderController struct {
	beego.Controller
}
func (g *GetBlockHeaderController) Get(){
	//查询数据库中是否存在数据
	block := &modles.BlockHeader{
		Hash:          "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",
		Confirmations: 0,
		Height:        0,
		Version:       0,
		VersionHex:    "",
		Merkleroot:    "",
		Time:          0,
		Mediantime:    0,
		Nonce:         0,
		Bits:          "",
		Difficulty:    0,
		Chainwork:     "",
		NTx:           0,
		Nextblockhash: "",
	}
	block, err := block.QueryGetBlockHeaderInfo()
	if err != nil{
		fmt.Println("查询数据库中是否存在区块头信息失败")
		fmt.Println(err.Error())
	}
	if block == nil {
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
	}else{
		g.Data["BlockHeader"] = block
		g.TplName = "getblockheader.html"
	}



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
