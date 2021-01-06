package controllers

import "github.com/astaxie/beego"

type SelectDataController struct {
	beego.Controller
}

func (s *SelectDataController) Get(){
	s.TplName = "select_data.html"
}
func (s *SelectDataController) Post(){

	s.TplName = "select_data.html"
}