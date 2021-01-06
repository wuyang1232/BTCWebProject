package modles

import (
	"BTCWebProject/mysql"
	"fmt"
)

////获取区块信息
//type GetBlock struct {
//	Hash          string   `json:"hash"`
//	Confirmations int64    `json:"confirmations"`
//	Strippedsize  int64    `json:"strippedsize"`
//	Size          int64    `json:"size"`
//	Weight        int64    `json:"weight"`
//	Height        int64    `json:"height"`
//	Version       int64    `json:"version"`
//	VersionHex    string   `json:"version_hex"`
//	Merkleroot    string   `json:"merkleroot"`
//	Tx            []string `json:"tx"`
//	Time          int64    `json:"time"`
//	Mediantime    int64    `json:"mediantime"`
//	Nonce         int64    `json:"nonce"`
//	Bits          string   `json:"bits"`
//	Difficulty    int64    `json:"difficulty"`
//	Chainwork     string   `json:"chainwork"`
//	NTx           int64    `json:"n_tx"`
//	Nextblockhash string   `json:"nextblockhash"`
//}

//将从bitcoin中拿到的数据保存到数据库中
func (b Blcok) SaveGetBlockData() (int64, error) {
	//插入数据
	result, err := mysql.DB.Exec("insert into getblock(hash,confirmations,stripped_size,size,weight,height,version,version_hex,merkle_root,tx,time,mediantime,nonce,bits,difficulty,chainwork,ntx,nextblockhash)values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
		b.Hash, b.Confirmations, b.Strippedsize, b.Size, b.Weight, b.Height, b.Version, b.VersionHex, b.Merkleroot, b.Tx,
		b.Time, b.Mediantime, b.Nonce, b.Bits, b.Difficulty, b.Chainwork, b.NTx, b.Nextblockhash)
	if err != nil {
		fmt.Println("插入数据失败，请重试：", err.Error())
		return -1, nil
	}
	rows, err := result.RowsAffected() //影响的行数
	if err != nil {
		fmt.Println("保存数据失败，请稍后再试", err.Error())
		return -1, nil
	}
	return rows, nil
}
