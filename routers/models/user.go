package models

type User struct {
	Id int `form:"id"`
	Username string `form:"username"`
	Password string `form:"password"`
}
