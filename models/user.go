package models

type User struct {
	Id int `form:"id"`
	UserName string `form:"username"`
	Possword string `form:"possword"`
}
