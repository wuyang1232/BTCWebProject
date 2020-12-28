package models

//获取区块信息
type GetBlock struct {
	Hash          string   `json:"hash"`
	Confirmations int64    `json:"confirmations"`
	Strippedsize  int64    `json:"strippedsize"`
	Size          int64    `json:"size"`
	Weight        int64    `json:"weight"`
	Height        int64    `json:"height"`
	Version       int64    `json:"version"`
	VersionHex    string   `json:"version_hex"`
	Merkleroot    string   `json:"merkleroot"`
	Tx            []string `json:"merkleroot"`
	Time          int64    `json:"time"`
	Mediantime    int64    `json:"mediantime"`
	Nonce         int64    `json:"nonce"`
	Bits          string   `json:"bits"`
	Difficulty    int64    `json:"difficulty"`
	Chainwork     string   `json:"chainwork"`
	NTx           int64    `json:"n_tx"`
	Nextblockhash string   `json:"nextblockhash"`
}

//获取地址信息
type GetAddressInfo struct {
	Address             string   `json:"address"`
	ScriptPubkey        string   `json:"scriptPubKey"`
	Ismine              bool     `json:"ismine"`
	solvable            bool     `json:"solvable"`
	Desc                string   `json:"desc"`
	Iswatchonly         bool     `json:"iswatchonly"`
	Isscript            bool     `json:"isscript"`
	Iswitness           bool     `json:"iswitness"`
	Witness_version     int64    `json:"witness_version"`
	Witness_program     string   `json:"witness_program"`
	Pubkey              string   `json:"pubkey"`
	Ischange            bool     `json:"ischange"`
	Timestamp           int64    `json:"timestamp"`
	Hdkeypath           string   `json:"hdkeypath"`
	Hdseedid            string   `json:"hdseedid"`
	Hdmasterfingerprint string   `json:"hdmasterfingerprint"`
	Lables              []string `json:"lables"`
}

//获取区块链上的信息
type GetBlockChainInfo struct {
	Chain         string `json:"chain"`
	Blocks        int64  `json:"blocks"`
	Headers       int64  `json:"headers"`
	Bestblockhash string `json:"bestblockhash"`
	Difficulty    int64  `json:"difficulty"`
}