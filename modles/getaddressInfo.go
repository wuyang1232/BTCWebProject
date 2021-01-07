package modles

import (
	"BTCWebProject/mysql"
	"fmt"
)

////获取地址信息
//type GetAddressInfo struct {
//	Address             string   `json:"address"`
//	ScriptPubkey        string   `json:"scriptPubKey"`
//	Ismine              bool     `json:"ismine"`
//	solvable            bool     `json:"solvable"`
//	Desc                string   `json:"desc"`
//	Iswatchonly         bool     `json:"iswatchonly"`
//	Isscript            bool     `json:"isscript"`
//	Iswitness           bool     `json:"iswitness"`
//	Witness_version     int64    `json:"witness_version"`
//	Witness_program     string   `json:"witness_program"`
//	Pubkey              string   `json:"pubkey"`
//	Ischange            bool     `json:"ischange"`
//	Timestamp           int64    `json:"timestamp"`
//	Hdkeypath           string   `json:"hdkeypath"`
//	Hdseedid            string   `json:"hdseedid"`
//	Hdmasterfingerprint string   `json:"hdmasterfingerprint"`
//	Lables              []string `json:"lables"`
//}

//将rpc中的数据保存到数据库当中
func (a AddressInfo) SaveGetAddressInfoData() (int64, error) {
	//插入数据
	result,err := mysql.DB.Exec("insert into getaddressinfo(address,scriptPubKey,ismine,solvable,iswatchonly,isscript,iswitness,pubkey,iscompressed,ischange,timestamp,hdkeypath,hdseedid,hdmasterfingerprint)values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
		a.Address,a.ScriptPubkey,a.Ismine,a.solvable,a.Iswatchonly,a.Isscript,a.Iswitness,a.Pubkey,a.Iscompressed,a.Ischange,a.Timestamp,a.Hdkeypath,a.Hdseedid,a.Hdmasterfingerprint)

	if err != nil {
		fmt.Println("插入数据失败，请重试", err.Error())
		return -1, err
	}
	rows, err := result.RowsAffected() //影响的行数
	if err != nil {
		fmt.Println("保存数据失败，请稍后再试", err.Error())
		return -1, err
	}
	return rows, nil
}


//查询数据库中是否有该条记录
func (a AddressInfo) QueryGetAddressInfoData() (*AddressInfo,error){
	row := mysql.DB.QueryRow("select address,scriptPubKey,ismine,solvable,iswatchonly,isscript,iswitness,pubkey,iscompressed,ischange,timestamp,hdkeypath,hdseedid,hdmasterfingerprint from getaddressinfo where address = ?",
		a.Address)
	err := row.Scan(&a.Address,&a.ScriptPubkey,&a.Ismine,&a.solvable,&a.Iswatchonly,&a.Isscript,&a.Iswitness,&a.Pubkey,&a.Iscompressed,
		a.Ischange,&a.Timestamp,&a.Hdkeypath,&a.Hdseedid,&a.Hdmasterfingerprint)
	if err != nil {
		fmt.Println("数据查询失败，请重试", err.Error())
		return nil, err
	}
	return &a,nil
}