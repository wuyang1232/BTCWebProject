package modles

import (
	"BTCWebProject/mysql"
	"fmt"
)

//获取区块链上的信息
type GetBlockChainInfo struct {
	Chain         string `json:"chain"`
	Blocks        int64  `json:"blocks"`
	Headers       int64  `json:"headers"`
	Bestblockhash string `json:"bestblockhash"`
	Difficulty    int64  `json:"difficulty"`
}

//将rpc区块数据保存到保存到数据库中
func (c GetBlockChainInfo)SaveGetBlockChainInfo()(int64,error)  {
	//插入数据
	result,err := mysql.DB.Exec("insert into getblockchaininfo(chain,blocks,headers,best_block_hash,difficulty)",
		c.Chain,c.Blocks,c.Headers,c.Bestblockhash,c.Difficulty)
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
