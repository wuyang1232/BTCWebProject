package controllers

import (
	"BTCWebProject/models"
	"BTCWebProject/mysql"
	"fmt"
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
	if len(user.UserName) > 0 && len(user.Password) > 0{
		row , err := mysql.AddUser(user)
		if err != nil{
			fmt.Println(err.Error())
			r.Ctx.WriteString("数据导入数据库时出错")
		}
		fmt.Println(row)
		//3、将处理结果返回给客户端浏览器
		//成功就跳转登录页面
		r.TplName = "login.html"
	}else if len(user.UserName)> 20 && len(user.Password) > 20 {
		r.Ctx.WriteString("用户名或者密码长度错误")
	}
}