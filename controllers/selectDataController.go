package controllers

import (
	"BTCWebProject/netapi/getblockInfo"
	"fmt"
	"github.com/astaxie/beego"
)

type SelectDataController struct {
	beego.Controller
}

func (s *SelectDataController) Get(){
	s.TplName = "select_data.html"
}
func (s *SelectDataController) Post(){
	pram := s.Ctx.Request.Form.Get("search")
	fmt.Println("拿到的参数：",pram)
	blockData, err := getblockInfo.GetBlockByPram(pram)
	if err != nil {
		s.Ctx.WriteString(err.Error())
		return
	}
	s.Data["Block"] =blockData
	fmt.Println(blockData)
	s.TplName = "select_data.html"
}