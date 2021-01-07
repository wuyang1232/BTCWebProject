package getblockInfo

import (
	"encoding/json"
	"errors"
	"fmt"
	"io/ioutil"
	"net/http"
)

const url = "https://chain.api.btc.com/v3/tx/0eab89a271380b09987bcee5258fca91f28df4dadcedf892658b9bc261050d96?verbose=3"

func GetBodyByUrl(url string) ([]byte,error) {
	response, err := http.Get(url)
	if err != nil {
		return nil, err
	}
	if response.StatusCode != 200 {
		fmt.Println(response.StatusCode)
		return nil ,  errors.New("如果不为200，则返回错误信息"+string(response.StatusCode))
	}
	return ioutil.ReadAll(response.Body)

	}



func DeSerializeTxResult (data []byte) (*TxResult, error) {
	var result TxResult
	err := json.Unmarshal(data, &result) ////第一个值传我们要反序列化的数据，第二个参数为要转化的类型的指针
	if err != nil {
		fmt.Println("反序列化失败：", err.Error())
		return nil, err
	}
	return &result ,nil
}


type TxResult struct {
	Data BlockTx`json:"data"`
	ErrCode int `json:"err_code"`
	ErrorNo int `json:"error_no"`
	Message string `json:"message"`
	Status string `json:"status"`
}

type BlockTx struct {
	BlockHeight int64
	BlockHash  string
	BlockTime  int64
	Confirmations int64
	Fee  int64
	Hash  string
	InputsCount int64
	InputsValue  int64
	IsCoinbase bool
	IsDoubleSpend  bool
	IsSwTx bool
	LockTime int64
	OutPutsCount int64
	OutPutValue  int64
	Sigops int64
	Size  int64
	Vsize  int64
	Weight  int64
	WitnessHash  string
	Input []string
	Output []string
}

type Input struct {
	PrevAddresses []string
	PrevPosition int64
	PrevTxHash int64
	PrevType  string
	PrevValue  int64
	Sequence  int64
	ScriptAsm string
	ScriptHex  string
	Witness  []string
}

type Output struct {
	Address string
	Value int64
	Type  string
	ScriptAsm string
	ScriptHex string
	SpentByTc string
	SpendByTxPosition int64
}