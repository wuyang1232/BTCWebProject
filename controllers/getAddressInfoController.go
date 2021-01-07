package controllers

import (
	"BTCWebProject/btc"
	"BTCWebProject/modles"
	"fmt"
	"github.com/astaxie/beego"
)

type GetAddressInfoController struct {
	beego.Controller
}

func (g *GetAddressInfoController) Get(){
	//查询数据库中是否有地址信息
	address := &modles.AddressInfo{
		Address:             "",
		ScriptPubkey:        "",
		Ismine:              false,
		Solvable:            false,
		Iswatchonly:         false,
		Isscript:            false,
		Iswitness:           false,
		Pubkey:              "",
		Iscompressed:        false,
		Ischange:            false,
		Timestamp:           0,
		Hdkeypath:           "",
		Hdseedid:            "",
		Hdmasterfingerprint: "",
	}
	address, err := address.QueryGetAddressInfoData()
	if err != nil{
		fmt.Println("查询数据库中是否有地址信息错误")
		fmt.Println(err.Error())
	}
	if address == nil{
		//使用rpc方法获取地址信息
		addressInfo, err := btc.GetAddressInfo("1En3PmGcnrKogu3EbTeboN7oePeJ3tQYah")
		if err != nil{
			fmt.Println("使用rpc方法获取地址信息失败")
			fmt.Println(err.Error())
		}
		//保存到数据库
		row, err := addressInfo.SaveGetAddressInfoData()
		if err != nil{
			fmt.Println("使用rpc方法获取地址信息保存到数据库失败")
			fmt.Println(err.Error())
		}
		fmt.Println("影响到的行数",row)
		fmt.Println(addressInfo)
		g.Data["AddressInfo"] = addressInfo
		g.TplName = "getaddressinfo.html"
	}else{
		fmt.Println(address)
		g.Data["AddressInfo"] = address
		g.TplName = "getaddressinfo.html"
	}
}
