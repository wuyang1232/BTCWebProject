package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

func main() {
	//fmt.Println("hello world")
	//response, err := http.Get("https://www.blockchain.com/btc/block/0")
	//if err != nil {
	//	fmt.Println(err.Error())
	//	return
	//}
	//bytes, err := ioutil.ReadAll(response.Body)
	//if err != nil {
	//	fmt.Println(err.Error())
	//	return
	//}
	//html := string(bytes)
	//hashReg := regexp.MustCompile(`<span class="sc-1ryi78w-0 cILyoi sc-16b9dsl-1 ZwupP u3ufsr-0 eQTRKC" opacity="1">(.*?)</span>`)
	//	hash := hashReg.FindAllStringSubmatch(html, -1)
	//	fmt.Println(hash[0])
	//[<span class="sc-1ryi78w-0 cILyoi sc-16b9dsl-1 ZwupP u3ufsr-0 eQTRKC" opacity="1">000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f</span> 000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f]

	var block = "0" //查询第0个区块
	fmt.Println("https://chain.api.btc.com/v3/block/" + block)
	response, err := http.Get("https://chain.api.btc.com/v3/block/" + block)
	if err != nil {
		fmt.Println(err.Error())
		return
	}
	if response.StatusCode != 200 { //200为请求成功，若不为200则请求失败
		fmt.Println("http状态码为", response.Status)
		return
	}
	bodyBytes, err := ioutil.ReadAll(response.Body)
	if err != nil { //读取response的内容，也就是我们需要的数据
		fmt.Println(err.Error())
		return
	}
	fmt.Println(string(bodyBytes))
	//拿到了：{"data":{"height":0,"version":1,"mrkl_root":"4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b","timestamp":1231006505,"bits":486604799,"nonce":2083236893,"hash":"000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f","prev_block_hash":"0000000000000000000000000000000000000000000000000000000000000000","next_block_hash":"00000000839a8e6886ab5951d76f411475428afc90947ee320161bbf18eb6048","size":285,"pool_difficulty":2536,"difficulty":1,"difficulty_double":1,"tx_count":1,"reward_block":5000000000,"reward_fees":0,"confirmations":663751,"is_orphan":false,"curr_max_timestamp":1231006505,"is_sw_block":false,"stripped_size":285,"sigops":4,"weight":1140,"extras":{"pool_name":"unknown","pool_link":""}},"err_code":0,"err_no":0,"message":"success","status":"success"}
	//定义结构体BlockData,展示数据类型

	//定义完成后将页面进行反序列化以得到我们自定义对应的结构体
	var result Result
	err = json.Unmarshal(bodyBytes, &result)  ////第一个值传我们要反序列化的数据，第二个参数为要转化的类型的指针
	if err != nil {
		fmt.Println("反序列化失败：", err.Error())
		return
	}
	//如果程序走到这里，就意味着我们的结构体反序列化成功了，我们可以通过字段名访问对应的数据
	//测试打印返回的区块高度和区块hash
	fmt.Println("区块高度为：", result.Data.Height)
	fmt.Println("区块hash为：", result.Data.Hash)

}


/**
 * 定义返回数据结构体Result，接收网页请求返回的数据
 */
type Result struct {
	Data BlockData `json:"data"`
	ErrCode int `json:"err_code"`
	ErrNo int `json:"err_no"`
	Message string `json:"message"`
	Status string `json:"status"`
}

//data 的数据库类型为复杂结构体类型，需要自定义
type BlockData struct {
	Height int64 `json:"height"`
	Version int64 `json:"version"`
	MrklRoot string `json:"mrkl_root"`
	TimeStamp int64 `json:"timestamp"`
	Bits int64 `json:"bits"`
	Nonce int64 `json:"nonce"`
	Hash string `json:"hash"`
	PrevBlockHash string `json:"prev_block_hash"`
	NextBlockHash string `json:"next_block_hash"`
	Size int64 `json:"size"`
	PoolDifficulty int64 `json:"pool_difficulty"`
	Difficulty int64 `json:"difficulty"`
	DifficultyDouble int64 `json:"difficulty_double"`
	RewardBlock int64 `json:"reward_block"`
	RewardFees int64 `json:"reward_fees"`
	Confirmations int64 `json:"confirmations"`
	IsOrphan bool `json:"is_orphan"`
	CurrMaxTimestamp int64 `json:"curr_max_timestamp"`
	IsSWBlock bool `json:"is_sw_block"`
	StrippedSize int64 `json:"stripped_size"`
	Sigops int64 `json:"sigops"`
	Weight int64 `json:"weight"`
	Extras Pool `json:"extras"`//该字段为复杂类型 需再定义一个struct类型来对应
}

type Pool struct {
	PoolName string `json:"pool_name"`
	PoolLink string
}