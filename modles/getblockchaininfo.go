package modles

import (
	"BTCWebProject/mysql"
	"fmt"
)

////获取区块链上的信息
//type GetBlockChainInfo struct {
//	Chain         string `json:"chain"`
//	Blocks        int64  `json:"blocks"`
//	Headers       int64  `json:"headers"`
//	Bestblockhash string `json:"bestblockhash"`
//	Difficulty    int64  `json:"difficulty"`
//}

//将从rpc中的区块数据保存到保存到数据库中
func (c BlockChainInfo)SaveGetBlockChainInfo()(int64,error)  {
	//插入数据
	result,err := mysql.DB.Exec("insert into getblockchaininfo(chain,blocks,headers,bestblockhash,difficulty,mediantimey,verificationprogress,initialblockdownload,chainwork,size_on_disk,pruned,softforks,warnings) values (?,?,?,?,?,?,?,?,?,?,?,?,?)",
		c.Chain,c.Blocks,c.Headers,c.Bestblockhash,c.Difficulty,c.Mediantime,c.Verificationprogress,c.Initialblockdownload,c.Chainwork,c.Size_on_disk,c.Pruned,c.Softforks,c.Warnings)
	if err != nil {
		fmt.Println("保存数据失败，请重试", err.Error())
		return -1, err
	}
	rows,err := result.RowsAffected()//影响的行数
	if err != nil {
		fmt.Println("保存数据失败，请稍后在试", err.Error())
		return -1, err
	}
	return rows, nil
}