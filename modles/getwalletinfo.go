package modles

import (
	"BTCWebProject/mysql"
	"fmt"
)
//将钱包信息  //getwalletinfo
func (w WalletInfo) SaveGetWalletInfo() (int64, error) {
	//插入数据
	result, err := mysql.DB.Exec("insert into getwalletinfo(walletversion,balance,txcount,keypoololdest,keypoolsize,unlocked_until)values (?,?,?,?,?,?)",
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
