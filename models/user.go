package models

import (
	"BTCWebProject/mysql"
	"crypto/md5"
	"encoding/hex"
	"fmt"
)

type User struct {
	Id int `form:"id"`
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

func QueryUserInfoByUserName(u User) ([]User, error) {
	rows, err := mysql.DB.Query("select * from user where username = ? and password = ?", u.UserName, u.Password)
	if err != nil {
		fmt.Println("用户名查询失败，请重试", err.Error())
		return nil, err
	}
	users := make([]User, 0)
	for rows.Next() {
		var user User
		err = rows.Scan(&user.Password, &user.UserName)
		if err != nil {
			fmt.Println(err.Error())
			return nil, err
		}
		users = append(users, user)
	}
	return users, nil
}


//将数据保存到数据库当中
func Save()  {

}
//根据命令查询信息
func QueryInfoByCommand(getblock string)  {
	mysql.DB.Query("select * from getblock")
}