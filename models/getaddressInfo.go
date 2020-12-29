package models

import (
	"BTCWebProject/mysql"
	"fmt"
)

//获取地址信息
type GetAddressInfo struct {
	Address             string   `json:"address"`
	ScriptPubkey        string   `json:"scriptPubKey"`
	Ismine              bool     `json:"ismine"`
	solvable            bool     `json:"solvable"`
	Desc                string   `json:"desc"`
	Iswatchonly         bool     `json:"iswatchonly"`
	Isscript            bool     `json:"isscript"`
	Iswitness           bool     `json:"iswitness"`
	Witness_version     int64    `json:"witness_version"`
	Witness_program     string   `json:"witness_program"`
	Pubkey              string   `json:"pubkey"`
	Ischange            bool     `json:"ischange"`
	Timestamp           int64    `json:"timestamp"`
	Hdkeypath           string   `json:"hdkeypath"`
	Hdseedid            string   `json:"hdseedid"`
	Hdmasterfingerprint string   `json:"hdmasterfingerprint"`
	Lables              []string `json:"lables"`
}

//将rpc中的数据保存到数据库当中
func (a GetAddressInfo)SaveGetAddressInfoData()(int64,error)  {
	//插入数据
	result,err := mysql.DB.Exec("insert into getaddressInfo(address,script_pubkey,is_mine,solvable,desc,is_watch_only,is_script,is_witness,witness_version,witness_program,pubkey,is_change,time_stamp,hdkey_path,hd_seedid,hd_master_finger_print,lables)",
		a.Address,a.ScriptPubkey,a.Ismine,a.solvable,a.Desc,a.Iswatchonly,a.Isscript,a.Iswitness,a.Witness_version,a.Witness_program,a.Pubkey,
		a.Ischange,a.Timestamp,a.Hdkeypath,a.Hdseedid,a.Hdmasterfingerprint,a.Lables)
	if err != nil {
		fmt.Println("保存数据失败，请重试",err.Error())
		return -1,err
	}
	rows,err :=result.RowsAffected()//影响的行数
	if err != nil {
		fmt.Println("保存数据失败，请稍后再试",err.Error())
		return -1,err
	}
	return rows,nil

}
