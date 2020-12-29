package routers

import (
	"BTCWebProject/controllers"
	"github.com/astaxie/beego"
)

func init() {
    beego.Router("/register", &controllers.RegisterController{})
    beego.Router("/login", &controllers.LoginController{})
    beego.Router("/showblock", &controllers.ShowBlockController{})
    beego.Router("/showrpc", &controllers.ShowRpcController{})
}
