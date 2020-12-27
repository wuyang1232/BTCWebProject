package controllers

import "github.com/astaxie/beego"

type ShowBlockController struct {
	beego.Controller
}

func (s *ShowBlockController) Get(){
	s.TplName = "showblock.html"
}
