package controllers

import "github.com/astaxie/beego"

type SelectController struct {
	beego.Controller
}

func (s *SelectController) Get(){
	s.TplName = "select.html"
}
