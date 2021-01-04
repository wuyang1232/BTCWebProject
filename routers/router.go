package routers

import (
	"BTCWebProject/controllers"
	"github.com/astaxie/beego"
)

func init() {
	beego.Router("/", &controllers.LoginController{})
	beego.Router("/register", &controllers.RegisterController{})
    beego.Router("/login", &controllers.LoginController{})
    beego.Router("/login.html", &controllers.LoginController{})
    beego.Router("/showblock", &controllers.ShowBlockController{})
    //beego.Router("/showblock.html", &controllers.ShowBlockController{})
    beego.Router("/showrpc", &controllers.ShowRpcController{})
    //beego.Router("/showrpc.html", &controllers.ShowRpcController{})
    beego.Router("/home", &controllers.HomeController{})
	//方法搜索
	beego.Router("/select", &controllers.SelectController{})
	//方法搜索后数据展示
	beego.Router("/select_data", &controllers.SelectDataController{})
}
