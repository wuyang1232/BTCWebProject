package getblockInfo

import (
	"encoding/json"
	"errors"
	"io/ioutil"
	"net/http"
)
//该函数通过参数（区块高度或区块哈希）获取一个区块详细信息指针
//"https://chain.api.btc.com/v3/block/"
func GetBlockByPram(pram string) (*BlockData,error) {
	resp, err := http.Get("https://chain.api.btc.com/v3/block/" + pram)
	if err !=nil{
		return nil,err
	}
	if resp.StatusCode != 200 {
		return nil,errors.New("响应状态码不为200！")
	}
	bodyBytes, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil,err
	}
	var result Result
	err = json.Unmarshal(bodyBytes, &result)
	if err != nil {
		return nil,err
	}
	return &result.Data,nil
}
