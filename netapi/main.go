package main

import (
	"BTCWebProject/netapi/getblockInfo"
	"fmt"
)

func main() {
	fmt.Println("helloworld")

	getblockInfo.GetBlocK0()
	getblockInfo.ReturnLatestBlock()
	getblockInfo.GetTx()

}