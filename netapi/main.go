package main

import (
	"BTCWebProject/netapi/getblockInfo"
	"fmt"
	"github.com/astaxie/beego"
)

func main() {
	fmt.Println("helloworld")

	//getblockInfo.GetBlocK0()
	getblockInfo.ReturnLatestBlock()
}