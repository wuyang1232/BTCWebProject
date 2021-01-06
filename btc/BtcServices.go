package btc

import (




	"BTCWebProject/modles"
	"BTCWebProject/mysql"
	"fmt"

	"github.com/mitchellh/mapstructure"

)

//比特币节点命令 getblockchaininfo 的封装函数
func GetBlockChainInfo()(*modles.BlockChainInfo,error)  {
	result, err := GetMsgByCommand("getblockchaininfo")
	if err != nil {
		return nil,err
	}
	var blockchain modles.BlockChainInfo
	err = mapstructure.Decode(result.Result, &blockchain)
	if err != nil{
		return nil,err
	}
	return &blockchain,nil
}

//比特币节点命令 getblockcount 的封装函数
func GetBlockCount() (interface{}, error) {
	result, err := GetMsgByCommand("getblockcount")
	if err != nil {
		return "", err
	}
	//存入数据

	//db.O.Insert(&result.Result)
	return result.Result, err
}
//比特币节点命令 getdifficult 的封装函数
func GetDifficult()(interface{}, error)  {
	result, err := GetMsgByCommand("getdifficulty")
	if err != nil {
		return nil,err
	}
	return result.Result,nil
}

func SaveGetDifficulty(intDiff interface{}) (int64,error) {
	result,err := mysql.DB.Exec("insert into getdifficulty(difficulty)values (?)", intDiff)
	fmt.Println(result)
	if err != nil{
		fmt.Println("保存数据失败,请重试：",err.Error())
		return -1,err
	}
	rows,err := result.RowsAffected()
	if err != nil{
		fmt.Println("保存数据失败,请稍后再试：",err.Error())
		return -1,err
	}
	return rows,nil
}
//比特币节点命令 getbestblockhash 的封装函数
func GetBestBlockHash() (interface{}, error) {
	result, err := GetMsgByCommand("getbestblockhash")
	if err != nil {
		return "", err
	}
	return result.Result, err
}

func SaveGetBestBlockHash(hash interface{}) (int64,error) {
	result,err := mysql.DB.Exec("insert into getbestblockhash(hash)values (?)", hash)
	if err != nil{
		fmt.Println("保存数据失败,请重试：",err.Error())
		return -1,err
	}
	rows,err := result.RowsAffected()
	if err != nil{
		fmt.Println("保存数据失败,请稍后再试：",err.Error())
		return -1,err
	}
	return rows,nil
}

//比特币节点命令 getblock 的封装函数
func GetBlockByHash(hash string) (*modles.Blcok,error) {
	result, err:= GetMsgByCommand("getblock", hash)
	if err != nil {
		return nil, err
	}
	var block modles.Blcok
	err = mapstructure.Decode(result.Result, &block)
	if err != nil {
		return nil,err
	}
	return &block, nil
}

//比特币节点命令 getblockheader hash的封装函数
func GetBlockHeaderByHash(hash string) (*modles.BlockHeader,error) {
	result, err:= GetMsgByCommand("getblockheader", hash)
	if err != nil {
		return nil, err
	}
	var block modles.BlockHeader
	err = mapstructure.Decode(result.Result, &block)
	if err != nil {
		return nil,err
	}
	return &block, nil
}

//比特币节点命令 getblockhash 的封装函数
func GetBlockHashByHeight(height int64) (interface{}, error) {
	result, err := GetMsgByCommand("getblockhash",height)
	if err != nil {
		return "", err
	}
	return result.Result, err
}
//保存通过高度拿到的区块hash值
func SaveGetBlockHashByHeight(hash interface{}) (int64,error) {
	result,err := mysql.DB.Exec("insert into getblockhashbyheight(hash)values (?)", hash)
	if err != nil{
		fmt.Println("保存数据失败,请重试：",err.Error())
		return -1,err
	}
	rows,err := result.RowsAffected()
	if err != nil{
		fmt.Println("保存数据失败,请稍后再试：",err.Error())
		return -1,err
	}
	return rows,nil
}