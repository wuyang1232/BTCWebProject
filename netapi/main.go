package main

import (
	"BTCWebProject/netapi/getblockInfo"
)

func main() {

	getblockInfo.GetBlocK0("https://chain.api.btc.com/v3/block/")
	getblockInfo.ReturnLatestBlock("https://chain.api.btc.com/v3/block/latest")
	getblockInfo.GetBodyByUrl("https://chain.api.btc.com/v3/tx/0eab89a271380b09987bcee5258fca91f28df4dadcedf892658b9bc261050d96?verbose=3")
	getblockInfo.GetAddressByUrl("https://chain.api.btc.com/v3/address/15urYnyeJe3gwbGJ74wcX89Tz7ZtsFDVew")


}