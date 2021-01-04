package getblockInfo

import (
	"encoding/json"
	"errors"
	"fmt"
	"io/ioutil"
	"net/http"
)
const Addressurl = "https://chain.api.btc.com/v3/address/15urYnyeJe3gwbGJ74wcX89Tz7ZtsFDVew"

func GetAddressByUrl(url string) ([]byte,error) {
	response, err := http.Get(Addressurl)
	if err != nil {
		fmt.Println(err.Error())
		return nil, err
	}
	if response.StatusCode != 200 {
		return nil, errors.New("如果不为200，则返回错误信息"+string(response.StatusCode))
	}
	return ioutil.ReadAll(response.Body)

	}


func unmarshal1 (data []byte) (*AddrResult, error) {
	var result AddrResult
	err := json.Unmarshal(data, &result) ////第一个值传我们要反序列化的数据，第二个参数为要转化的类型的指针
	if err != nil {
		fmt.Println("反序列化失败：", err.Error())
		return nil, err
	}
	return &result ,nil
		}

		type AddrResult struct {
			Data AddressData `json:"data"`
			ErrCode int `json:"err_code"`
			ErrNo int `json:"err_no"`
			Message string `json:"message"`
			Status string `json:"status"`
		}

		type AddressData struct {
			Address string `json:"address"`
			Received int64 `json:"received"`
			Send  int64 `json:"send"`
			Balance int64 `json:"balance"`
			TxCount int64 `json:"tx_count"`
			UnconfirmedTxCount int64 `json:"unconfirmed_tx_count"`
			unconfirmedReceived int64 `json:"unconfirmed_received"`
			UnconfirmedSent int64 `json:"unconfirmed_sent"`
			UnspentTxCount int64 `json:"unspent_tx_count"`
		}