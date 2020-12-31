package moudles

import (
	"BTCWebProject/mysql"
	"crypto/md5"
	"encoding/hex"
	"fmt"
)

type User struct {
	Id       int    `form:"id"`
	UserName string `form:"username"`
	Password string `form:"password"`
}

//将用户信息保存到数据库当中
func AddUser(u User) (int64, error) {
	//1、将密码进行哈希计算
	md5Hash := md5.New()
	md5Hash.Write([]byte(u.Password))
	passwordBytes := md5Hash.Sum(nil)
	u.Password = hex.EncodeToString(passwordBytes)
	result, err := mysql.DB.Exec("insert into user (username,password) values(?,?) ",
		u.UserName, u.Password)
	if err != nil {
		fmt.Println("保存信息失败，请重试", err.Error())
		return -1, err
	}
	row, err := result.RowsAffected()
	if err != nil {
		fmt.Println("保存信息失败，请稍后再试", err.Error())
		return -1, err
	}
	return row, nil
}

//通过用户名查询用户信息

func QueryUserInfoByUserName(u User) (*User, error) {
	//1、将密码进行哈希计算

	md5Hash := md5.New()
	md5Hash.Write([]byte(u.Password))
	passwordBytes := md5Hash.Sum(nil)
	u.Password = hex.EncodeToString(passwordBytes)
	row := mysql.DB.QueryRow("select username from user where  password = ? and username = ?", u.Password,u.UserName)
	var user User
	err := row.Scan( &user.UserName)
	if err != nil {
		fmt.Println("错误是：",err.Error())
		return nil, err
	}
	//err = row.Scan(&u.UserName,&u.Password)                                                                                               //浏览，读取
	//if err != nil {
	//	return nil, err
	//}
	return &user, nil

}


//根据命令查询信息
func QueryInfoByCommand(getblock string) {
	mysql.DB.Query("select * from getblock")
}
