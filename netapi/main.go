package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"regexp"
)


type btcWeb struct {
	Hash string
	Confirmations string
	Timestamp string
	Height  string
	Miner   string
	NumberOfTransactions  string
	Difficulty   string
	MerkleRoot   string
	Version    string
	Bits    string
	Weight   string
	Size     string
	Nonce string
	TransactionVolume   string
	BlockReward    string
	FeeReward    string
}

func main() {
	client := http.Client{}
	request, err := http.NewRequest("GET", "https://www.blockchain.com/btc/block/0", nil)

	//请求数据
	response, err := client.Do(request)
	if err != nil {
		log.Fatal(err.Error())
		return
	}

	htmlBytes, err := ioutil.ReadAll(response.Body)
	if err != nil {
		log.Fatal(err.Error())
		return
	}

	//通过网络请求把网页数据转换成html的string格式，然后输出
	html := string(htmlBytes) //网页源码
	//fmt.Println(html)

	//hash0
	hash0Reg := regexp.MustCompile(`<span class="sc-1ryi78w-0 cILyoi sc-16b9dsl-1 ZwupP u3ufsr-0 eQTRKC" opacity="1">(.*?)</span>`)
	hash0Slice := hash0Reg.FindAllStringSubmatch(html, -1)


	for i := 0; i < len(hash0Slice); i++ {
		fmt.Printf("%s\n",
			hash0Slice[i][1],)
		}


}