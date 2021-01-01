package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

/**
1、使用GO自带的http包下的Get函数去拿到对应网站url的响应，我们要的数据在响应体里面
		response,err:= http.Get(url)
2、判断一下我们的Get请求是否成功？ 两百状态码为请求成功
		response.StatusCode ==200

3、将我们拿到的response中的响应体 Body读出来，这里用ioutil包下的readAll方法，
		bodyBytes，err ：= ioutil.ReadAll(response.Body)
		bodyBytes是字节切片类型，0-255 我们看不懂，所以就强转一下string打印输出看一下是不是我们要结果

4、如果打印出来的结果没问题，就意味着我们调用api接口成功拿到了数据。
	然后我们需要把他的类型转化一下，把json格式转换成go语言中对应的数据类型。而go中的诸多类型中只有struct最为合适，
	所以我们定义一下struct：一个属性对应一个字段名，如果属性的结构体还是复杂数据类型（不是int string bool float）则也需要为该属性定义struct来表示，否则会接收失败。
5、定义好结构体类型后，就可以开始反序列化了
	json格式的序列化和反序列化： 在go语言的 encoding/json 包中定义好了，直接拿来用
	Unmarshal方法(反序列化): json数据类型转为go语言的对应数据类型
	Marshal方法(序列化) ：go语言数据类型转为json数据类型
 	err = json.Unmarshal(bodyBytes, &result)
	反序列化没问题的话，就可以通过我们的定义的字段名得出对应的值。
这个api接口调用数据就差不多写好了，然后再进行优化，这个网址的api调用block数据就ok了
*/
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
	//如果程序走到这里，就意味着结构体反序列化成功，我们可以通过字段名访问对应的数据
	//测试打印返回的区块高度和区块hash
	fmt.Println("区块高度为：", result.Data.Height)
	fmt.Println("区块hash为：", result.Data.Hash)

}


/**
 * 定义返回数据结构体Result，接收网页请求返回的数据
 * 使用json解析工具(http://json.cn/),把页面请求到的json数据放进去
 * 得到五个字段：data、err_code、err_no、message、status
 * 字段名定义时注意首字母大写，使能让其它包调用
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