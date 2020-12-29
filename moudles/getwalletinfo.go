package models

import (
	"BTCWebProject/mysql"
	"fmt"
)

//获取钱包信息
type GetWalletInfo struct {
	Walletversion  int64   `json:"walletversion"`
	balance        float64 `json:"balance"`
	Txcount        int64   `json:"txcount"`
	Keypoololdest  int64   `json:"keypoololdest"`
	keypoolsize    int64   `json:"keypoolsize"`
	unlocked_until int64   `json:"unlocked_until"`
}

//将钱包信息
func (w GetWalletInfo) SaveGetWalletInfo() (int64, error) {
	//插入数据
	result, err := mysql.DB.Exec("insert into getwalletinfo(walletversion,balance,txcount,keypoololdest,keypoolsize,unlocked_until)",
		w.Walletversion, w.balance, w.Txcount, w.Keypoololdest, w.keypoolsize, w.unlocked_until)
	if err != nil {
		fmt.Println("保存数据失败,请重试：",err.Error())
		return -1,nil
	}
	rows,err := result.RowsAffected()//影响的行数
	if err != nil {
		fmt.Println("保存数据失败,请稍后在试：",err.Error())
		return -1,nil
	}
	return rows,nil
}
