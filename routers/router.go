package routers

import (
	"BTCWebProject/controllers"
	"github.com/astaxie/beego"
)

func init() {
	beego.Router("/", &controllers.LoginController{})
	beego.Router("/register", &controllers.RegisterController{})
    beego.Router("/login", &controllers.LoginController{})
    //beego.Router("/login.html", &controllers.LoginController{})
	//获取区块信息
    beego.Router("/getblock", &controllers.GetBlockController{})
    //beego.Router("/getblock.html", &controllers.ShowBlockController{})
    //获取区块头信息
    beego.Router("/getblockheader", &controllers.GetBlockHeaderController{})
    //beego.Router("/getblockheader.html", &controllers.GetBlockHeaderController{})
	//查询区块链状态信息
    beego.Router("/getblockchaininfo",&controllers.GetBlockChainInfoController{})
	//获取当前挖矿难度
	beego.Router("/getdifficult",&controllers.GetDifficultController{})
	//获取最新区块的哈希
	beego.Router("/getbestblockhash",&controllers.GetBestBlockHashController{})
	//根据高度获取区块的hash值
	beego.Router("/getblockhashbyheight", &controllers.GetBlockHashByHeight{})
	//获取地址信息
	beego.Router("/getaddressinfo",&controllers.GetAddressInfoController{})
	//获取钱包信息
	beego.Router("/getwalletinfo", &controllers.GetWalletInfoController{})

    beego.Router("/search", &controllers.SerachController{})
	//方法搜索
	beego.Router("/select", &controllers.SelectController{})
	//方法搜索后数据展示
	beego.Router("/select_data", &controllers.SelectDataController{})
}
