package modles

import (
	"BTCWebProject/mysql"
	"fmt"
)

//type BlockHeader struct {
//	Hash          string `json:"hash"`
//	Confirmations int64 `json:"confirmations"`
//	Height        int64 `json:"height"`
//	Version       int64 `json:"version"`
//	VersionHex    string `json:"version_hex"`
//	Merkleroot    string `json:"merkleroot"`
//	Time          int64 `json:"time"`
//	Mediantime    int64 `json:"mediantime"`
//	Nonce         int64 `json:"nonce"`
//	Bits          string `json:"bits"`
//	Difficulty    int64 `json:"difficulty"`
//	Chainwork     string `json:"chainwork"`
//	NTx           int64 `json:"n_tx"`
//	Nextblockhash string `json:"nextblockhash"`
//}

//将从rpc拿到的数据保存到数据库当中
func (h BlockHeader)SaveGetBlockHeader() (int64,error) {
	//执行sql语句
	result,err := mysql.DB.Exec("insert into getblockheader(hash,confirmations,height,version,version_hex,merkleroot,time,mediantime,nonce,bits,difficulty,chainwork,n_tx,nextblockhash)values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
		h.Hash,h.Confirmations,h.Height,h.Version,h.VersionHex,h.Merkleroot,h.Time,h.Mediantime,h.Nonce,h.Bits,
		h.Difficulty,h.Chainwork,h.NTx,h.Nextblockhash)
	if err != nil{
		fmt.Println("保存数据失败，请重试：",err.Error())
		return -1,nil
	}
	row,err := result.RowsAffected()//影响的行数
	if err != nil{
		fmt.Println("保存数据失败，请稍后在试：",err.Error())
		return -1,err
	}
	return row,nil
}