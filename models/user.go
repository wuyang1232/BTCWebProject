package models

type User struct {
	Id int `form:"id"`
	UserName string `form:"username"`
	Password string `form:"password"`
}
