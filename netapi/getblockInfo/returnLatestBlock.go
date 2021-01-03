package getblockInfo

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

func ReturnLatestBlock() {
	response, err := http.Get("https://chain.api.btc.com/v3/block/latest")
	if err != nil {
		fmt.Println(err.Error())
		return
	}
	if response.StatusCode != 200 {
		fmt.Println("http状态码为", response.StatusCode)
	}
	bodyBytes, err := ioutil.ReadAll(response.Body)
	if err != nil { //读取response的内容，也就是我们需要的数据
		fmt.Println(err.Error())
		return
	}
	fmt.Println(string(bodyBytes))

	var result LatestResult
	err = json.Unmarshal(bodyBytes, &result)  ////第一个值传我们要反序列化的数据，第二个参数为要转化的类型的指针
	if err != nil {
		fmt.Println("反序列化失败：", err.Error())
		return
	}

	fmt.Println("最新区块哈希是：",result.Data.Hash)

}

type LatestResult struct {
	Data BlockData `json:"data"`
	ErrCode int `json:"err_code"`
	ErrNo int `json:"err_no"`
	Message string `json:"message"`
	Status string `json:"status"`
}

//type BlockData struct {
//	Height int64 `json:"height"`
//	Version int64 `json:"version"`
//	MrklRoot string `json:"mrkl_root"`
//	TimeStamp int64 `json:"timestamp"`
//	Bits int64 `json:"bits"`
//	Nonce int64 `json:"nonce"`
//	Hash string `json:"hash"`
//	PrevBlockHash string `json:"prev_block_hash"`
//	NextBlockHash string `json:"next_block_hash"`
//	Size int64 `json:"size"`
//	PoolDifficulty int64 `json:"pool_difficulty"`
//	Difficulty int64 `json:"difficulty"`
//	DifficultyDouble  float64 `json:"difficulty_double"`
//	RewardBlock int64 `json:"reward_block"`
//	RewardFees int64 `json:"reward_fees"`
//	Confirmations int64 `json:"confirmations"`
//	IsOrphan bool `json:"is_orphan"`
//	CurrMaxTimestamp int64 `json:"curr_max_timestamp"`
//	IsSWBlock bool `json:"is_sw_block"`
//	StrippedSize int64 `json:"stripped_size"`
//	Sigops int64 `json:"sigops"`
//	Weight int64 `json:"weight"`
//	Extras Pool `json:"extras"`
//}

//type Extras struct {
//	PoolName string `json:"pool_name"`
//	PoolLink string
//}