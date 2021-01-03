package modles

import (
	"BTCWebProject/mysql"
	"BTCWebProject/utils"
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
	u.Password = utils.Md5Hash(u.Password)
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
	u.Password = utils.Md5Hash(u.Password)
	row := mysql.DB.QueryRow("select username from user where  password = ? and username = ?", u.Password,u.UserName)
	var user User
	err := row.Scan( &user.UserName)
	if err != nil {
		fmt.Println("错误是：",err.Error())
		return nil, err
	}
	return &user, nil

}

