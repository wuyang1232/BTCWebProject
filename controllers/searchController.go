package controllers

import (
	"BtcGoWeb/btc"
	"encoding/json"
	"errors"
	"fmt"
	"github.com/astaxie/beego"
	"strconv"
	"strings"
)

type SerachController struct {
	beego.Controller
}
//获取前端传来的比特币节点rpc命令和参数 ，在后台向比特币节点发起rpc请求 将结果返回给前端
func (h *SerachController) Post() {
	data := h.Ctx.Request.Form.Get("pram")
	fmt.Println("js发来的数据信息:", data)
	if data == "" {
			h.Ctx.WriteString("前端传递的参数错误，请重试")
			return
		}
	dataArr := strings.SplitN(data, " ",2)
	if len(dataArr)==1 {
		result, err := btc.GetMsgByCommand(dataArr[0])
		if err != nil {
			h.Ctx.WriteString("rpc请求错误"+err.Error())
			return
		}
		bytes, _ := json.Marshal(result.Result)
		//	&nbsp; 转义 空格  &quot; 转义 "
		res := Insert_Str(
			Insert_Str(
				Insert_Str(
					Insert_Str(
						Insert_Str(
							Insert_Str(string(bytes),",",",<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"),
							`"`,"&quot;"),
						"{","{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"),
					"}","<br/>}"),
				`\n`,`<br/>`),
			`\`,``)

		h.Ctx.WriteString(res)
		return
	}
	var method = dataArr[0]
	var arguments = dataArr[1]
	fmt.Println(method)
	fmt.Println(arguments)
	params, err := ParseParams(arguments)
	if err != nil {
		h.Ctx.WriteString("解析参数错误，请重试！"+err.Error())
		return
	}
	result, err := btc.GetMsgByCP(method, params)
	if err != nil {
		h.Ctx.WriteString("rpc请求数据错误："+err.Error())
		return
	}
	fmt.Println("查出来的结果为：",result)
	fmt.Println(params)
	bytes, _ := json.Marshal(result.Result)
//	&nbsp; 转义 空格  &quot; 转义 "
	res := Insert_Str(
		Insert_Str(
			Insert_Str(
				Insert_Str(
					Insert_Str(
						Insert_Str(string(bytes),",",",<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"),
						`"`,"&quot;"),
						"{","{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"),
						"}","<br/>}"),
						`\n`,`<br/>`),
						`\`,``)

	h.Ctx.WriteString(res)
}
func ParseParams(params string) ([]interface{}, error) {
	strarr := strings.Split(params, " ")
	var inter []interface{}
	fmt.Println("len:", len(strarr))
	if len(params) > 0 {
		for i := 0; i < len(strarr); i++ {
			if strings.Contains(strarr[i], `"`) {
				str := strings.Split(strarr[i], `"`)
				if len(str) >= 3 {
					inter = append(inter, str[1])
				} else {
					return nil, errors.New("参数字符格式错误")
				}
			} else {
				in, err := strconv.Atoi(strarr[i])
				if err != nil {
					return nil, errors.New("参数整数格式错误")
				}
				inter = append(inter, in)
			}
		}
	}
	fmt.Println("arr:", inter)
	return inter, nil
}
func Insert_Str(str string,old string,new string) string{
	st := strings.Replace(str,old,new,-1)
	return st
}
func (h *SerachController) Get() {
	h.TplName = "search.html"
}
