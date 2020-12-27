package mysql

import (
	"database/sql"
	"fmt"
	"github.com/astaxie/beego"
	_"github.com/go-sql-driver/mysql"
)
var DB *sql.DB
//连接数据库
func Connect()  {
		//获取配置信息
	config := beego.AppConfig
	appName := config.String("appname")//项目名称
	fmt.Println("项目名称为：", appName)
	port,err := config.Int("httpport")//端口号
	if err != nil {
		fmt.Println(err.Error())
		return
	}
	fmt.Println("端口号为：",port)
	driver := config.String("db_driver")//数据库驱动
	dbUser := config.String("db_user")//用户名
	dbPwd := config.String("db_possword")//密码
	dbIp := config.String("db_ip")//ip地址
	dbName := config.String("db_name")//数据库名称
	//打开数据库
	//root:HJC123@@@@@tcp(127.0.0.1:3306)/btc_web?charset = utf8
	db,err := sql.Open(driver,dbUser + ":" + dbPwd + "@tcp(" + dbIp + ")/" + dbName + "?charset = utf8")
	if err != nil{
		fmt.Println(err.Error())
		return
	}
	DB = db
	fmt.Println(DB)
}
