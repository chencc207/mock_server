const express = require('express')

const app = express()
const hostile = require('./router/hostile.js')

// 解决跨域
//设置跨域访问
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", req.headers.origin); //需要显示设置来源
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials", true); //带cookies7     res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.use('/controller/strategic/hostile', hostile)

app.listen(8001, function () {
  console.log('mock服务启动')
})