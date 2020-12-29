package controllers

import (
	"BTCWebProject/models"
	"database/sql"
	"fmt"
	"github.com/astaxie/beego"
)

type LoginController struct {
	beego.Controller
}

func (l *LoginController)Get(){
	l.TplName = "login.html"
}

var DB *sql.DB
func (l *LoginController)Post(){
	//1、解析用户端提交的请求数据
	var user models.User
	err := l.ParseForm(&user)//地址读取
	fmt.Println(user)
	if err != nil{
		fmt.Println(err.Error())
		l.Ctx.WriteString("用户登录信息数据解析失败")
		return
	}
	//2、根据解析到的数据，执行数据库查询操作
	_, err = models.QueryUserInfoByUserName(user)
	//3、判断该用户是否存在
	if err != nil{
		fmt.Println(err.Error())
		l.Ctx.WriteString("用户登录失败，请检查用户名或者密码")
		return
	}
	//4、根据查询结果，返回客户相应的信息 并跳转主页面
	l.TplName = "home.html" //用户存在，跳转到主页面
}

