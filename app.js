// 引用 express 来支持 HTTP Server 的实现
const express = require('express');

// 引用微信公共平台自动回复消息接口服务中间件
var wechat = require('wechat');

// 创建一个 express 实例
const app = express();

// 配置微信公众平台参数，在教程第二步中获取
var config = {
    token: 'token', // 填第二步中获取的 `token`
    appid: 'wxe481882d4f9c57c1', // 填第二步中获取的 `appid`
    encodingAESKey: '3iJyVWWeinFbWCFxgqGTQolQGwX9WDdTqZxUN0SWLLR', // 填第二步中获取的 `encodingAESKey`
    checkSignature: true // 可选，默认为true。由于微信公众平台接口调试工具在明文模式下不发送签名，所以如要使用该测试工具，请将其设置为false 
};

app.use(express.query());

app.use('/', wechat(config, function (req, res, next) {
    var message = req.weixin;
    // let axios = require("axios");
    
    // axios.get(`http://www.tuling123.com/openapi/api?key=262202cd50b04864bb12238210d9845b&info=${message.}&userid=3245232`)
    //   .then(function (response) {
    //     console.log(response.data.text);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    // });
      //你也可以这样回复text类型的信息 
    
    console.log("接收消息",message);
    res.reply({
        content: '你好，Hello World!',
        type: 'text'
    });
}));

console.log("hello")

// 监听端口，等待连接
const port = 5050;
app.listen(port);

// 输出服务器启动日志
console.log(`Server listening at http://127.0.0.1:${port}`);