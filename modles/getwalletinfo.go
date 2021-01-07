package modles

import (
	"BTCWebProject/mysql"
	"fmt"
)

//将钱包信息保存到数据中  //getwalletinfo
func (w WalletInfo) SaveGetWalletInfo() (int64, error) {
		//插入数据
		result, err := mysql.DB.Exec("insert into getwalletinfo(walletname,walletversion,balance,unconfirmed_balance,immature_balance,txcount,keypoololdest,keypoolsize,hdseedid,keypoolsize_hd_internal,paytxfee,private_keys_enabled,avoid_reuse,scanning)values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
			w.Walletname, w.Walletversion, w.Balance, w.Unconfirmed_balance, w.Immature_balance, w.Txcount, w.Keypoololdest, w.Keypoolsize, w.Hdseedid, w.Keypoolsize_hd_internal,w.Paytxfee, w.Private_keys_enabled, w.Avoid_reuse, w.Scanning)
		if err != nil {
			fmt.Println("保存数据失败,请重试：", err.Error())
		}
		rows, err := result.RowsAffected() //影响的行数
		if err != nil {
			fmt.Println("保存数据失败,请稍后在试：", err.Error())
		}
		return rows, nil

}

//查询数据库中是否有该条记录
func (w WalletInfo) QueryGetWalletInfo() (*WalletInfo,error){
	row := mysql.DB.QueryRow("select walletname, walletversion,balance,unconfirmed_balance,immature_balance,txcount,keypoololdest,keypoolsize,hdseedid,keypoolsize_hd_internal,paytxfee,private_keys_enabled,avoid_reuse,scanning from getwalletinfo where walletversion = ?",
		w.Walletversion)
	err := row.Scan(&w.Walletname,&w.Walletversion,&w.Balance,&w.Unconfirmed_balance,&w.Immature_balance,&w.Txcount,&w.Keypoololdest,&w.Keypoolsize,&w.Hdseedid,&w.Keypoolsize_hd_internal,&w.Paytxfee,&w.Private_keys_enabled,&w.Avoid_reuse,&w.Scanning)
	if err != nil {
		fmt.Println("数据查询失败，请重试", err.Error())
		return nil, err
	}
	return &w,nil
}
