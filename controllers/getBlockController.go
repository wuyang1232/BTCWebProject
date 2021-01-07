package controllers

import (
	"BTCWebProject/btc"
	"BTCWebProject/modles"
	"fmt"
	"github.com/astaxie/beego"
)

type GetBlockController struct {
	beego.Controller
}

func (g *GetBlockController) Get(){
	//查询数据库中是否存在区块信息
	dblock := &modles.Blcok{
		Hash:          "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",
		Confirmations: 0,
		Strippedsize:  0,
		Size:          0,
		Weight:        0,
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
	dblock, err := dblock.QueryGetBlockData()
	if err != nil{
		fmt.Println("从数据库获区块信息失败")
		fmt.Println(err.Error())
	}
	if dblock == nil{
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
	}else {
		g.Data["Block"] = dblock
		g.TplName = "getblock.html"
	}

}
