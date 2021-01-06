package controllers

import (
	"BTCWebProject/btc"
	"fmt"
	"github.com/astaxie/beego"
)

type GetDifficultController struct {
	beego.Controller
}

func (g *GetDifficultController) Get(){
	//通过rpc方法获取挖矿难度
	difficult, err := btc.GetDifficult()
	if err != nil{
		fmt.Println("获取挖矿难度失败")
		fmt.Println(err.Error())
	}
	rows, err := btc.SaveGetDifficulty(difficult)
	if err != nil{
		fmt.Println("将挖矿难度保存到数据库时失败")
		fmt.Println(err.Error())
	}
	fmt.Println("影响到的行数：",rows)
	g.Data["Difficult"] = difficult
	g.TplName = "getdifficult.html"
}
