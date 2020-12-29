package controllers

import (
	"BTCWebProject/models"
	"github.com/astaxie/beego"
)

type RegisterController struct {
	beego.Controller
}
//用与直接跳转注册页面
func (r *RegisterController)Get(){
	r.TplName = "register.html"
}

func (r *RegisterController) Post(){
	//1、解析用户端提交的请求数据
	var user models.User
	err := r.ParseForm(&user)
	if err != nil{
		r.Ctx.WriteString("用户注册时，输入数据解析失败")
		return
	}
	//2、将解析到的数据保存到数据库中
	//if len(user.Username) > 0{
	//	row , err := user.add
	//}
}