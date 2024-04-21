const http = require('http')

const server = http.createServer((req, res) => {
  // 这里的代码，在“服务器收到 http 请求”后执行
  console.log('收到请求', new Date()) // 打印日志
  res.write('Hello, Node.js') // 回信内容（响应内容）
  res.end() // 回信完毕
})

server.listen(8080)
console.log('ok')
