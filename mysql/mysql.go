package mysql

import (
	"BTCWebProject/models"
	"crypto/md5"
	"database/sql"
	"encoding/hex"
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
	dbPwd := config.String("db_password")//密码
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

//将用户信息保存到数据库当中
func AddUser(u models.User) (int64,error) {
	//1、将密码进行哈希计算
	md5Hash := md5.New()
	md5Hash.Write([]byte(u.Password))
	passwordBytes := md5Hash.Sum(nil)
	u.Password = hex.EncodeToString(passwordBytes)

	result,err := DB.Exec("insert into user (user_name,password) values(?,?) ",
		u.UserName,u.Password)
	if err != nil {
		fmt.Println("保存信息失败，请重试",err.Error())
		return -1,err
	}
	row,err :=result.RowsAffected()
	if err != nil {
		fmt.Println("保存信息失败，请稍后再试",err.Error())
		return -1,err
	}
	return row,nil
}


//通过用户名查询用户信息
func QueryUserInfoByUserName(userName string) ([]models.User,error) {
	rows,err := DB.Query("select * from user where username = ?",userName)
	if err != nil {
		fmt.Println("用户名查询失败，请重试",err.Error())
		return nil,err
	}
	users := make([]models.User,0)
	for rows.Next() {
		var user models.User
		err = rows.Scan(&user.Password,&user.UserName)
		if err != nil {
			fmt.Println(err.Error())
			return nil,err
		}
		users = append(users,user)
	}
	return users,nil
}

//根据命令查询信息
func QueryInfoByCommand(command string)  {

}