package controllers

import (
	"github.com/astaxie/beego"
)

type ShowRpcController struct {
	beego.Controller
}

func (s *ShowRpcController) Get(){
	s.TplName = "showrpc.html"
}
