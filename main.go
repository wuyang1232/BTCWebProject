package main

import (
	"BTCWebProject/mysql"
	_ "BTCWebProject/routers"
	"github.com/astaxie/beego"
)

func main() {

	//静态资源映射文件
	beego.SetStaticPath("/js", "./static/js")
	beego.SetStaticPath("/img", "./static/img")
	beego.SetStaticPath("/css", "./static/css")

	//数据库连接
	mysql.Connect()

	//blockHeader, err := btc.GetBlockHeaderByHash("000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f")
	//if err !=nil {
	//	fmt.Println(err.Error())
	//}
	//fmt.Println(blockHeader.Hash)

	//result, err := btc.GetBestBlockHash()
	//if err != nil{
	//	fmt.Println("获取最新区块的hash值错误",err.Error())
	//	return
	//}
	//fmt.Println("最新区块的hash值",result)

	//blockHeaders,err := btc.GetBlockHeaderByHash("000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f")
	//if err != nil {
	//	fmt.Println(err.Error())
	//}
	//fmt.Println("heder:",blockHeaders)
	//row,err := blockHeaders.SaveGetBlockHeader()
	//if err != nil {
	//	fmt.Println("保存数据失败：",err.Error())
	//}
	//fmt.Println("影响的行数：",row)

	//通过hash值获取区块的数据
	//block,err := btc.GetBlockByHash("000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f")
	//if err != nil {
	//	fmt.Println(err.Error())
	//}
	////fmt.Println("block:",block)
	//row,err := block.SaveGetBlockData()
	//if err != nil {
	//	fmt.Println("保存数据失败：",err.Error())
	//}
	//fmt.Println("影响的行数：",row)

	//rows,err := btc.SaveGetBlockHashByHeight(0)
	//if err != nil {
	//	fmt.Println(err.Error())
	//}
	//fmt.Println("影响的行数：",rows)
	////获取最新区块hash
	//rows,err = btc.SaveGetBestBlockHash()
	//fmt.Println("影响的行数：",rows)

	//获取区块的难度
	//diffint, err := btc.SaveGetDifficulty()
	//if err != nil {
	//	fmt.Println(err.Error())
	//}
	//fmt.Println("影响的行数：", diffint)

	beego.Run()

}
