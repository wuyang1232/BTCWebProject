package controllers

import (
	"BTCWebProject/btc"
	"BTCWebProject/modles"
	"fmt"
	"github.com/astaxie/beego"
)

type GetWalletInfoController struct {
	beego.Controller
}

func (g *GetWalletInfoController) Get(){
	//查询数据库中是否存在钱包信息
	wallet := &modles.WalletInfo{
		Walletname:              "",
		Walletversion:           0,
		Balance:                 0,
		Unconfirmed_balance:     0,
		Immature_balance:        0,
		Txcount:                 0,
		Keypoololdest:           0,
		Keypoolsize:             0,
		Hdseedid:                "",
		Keypoolsize_hd_internal: 0,
		Paytxfee:                0,
		Private_keys_enabled:    false,
		Avoid_reuse:             false,
		Scanning:                false,
	}
	wallet, err := wallet.QueryGetWalletInfo()
	if err != nil{
		fmt.Println("查询数据库中是否存在钱包信息失败")
		fmt.Println(err.Error())
	}
	if wallet == nil{
		//根据rpc方法获取钱包信息
		walletInfo, err := btc.GetWalletInfo()
		if err != nil{
			fmt.Println("根据rpc方法获取钱包信息失败")
			fmt.Println(err.Error())
		}
		row, err := walletInfo.SaveGetWalletInfo()
		if err != nil{
			fmt.Println("保存钱包信息到数据库中失败")
			fmt.Println(err.Error())
		}
		fmt.Println("影响到的行数",row)
		g.Data["WalletInfo"] = walletInfo
		g.TplName = "getwalletinfo.html"
	}else{
		g.Data["WalletInfo"] = wallet
		g.TplName = "getwalletinfo.html"
	}
}
