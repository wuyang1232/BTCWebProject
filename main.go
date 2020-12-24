package main

import (
	_ "BTCWebProject/routers"
	"fmt"
	"github.com/astaxie/beego"
)

func main() {
	fmt.Println("hello hanhan")
	beego.Run()
}

