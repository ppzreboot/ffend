const http = require('http')

const server = http.createServer((req, res) => {
  console.log('收到请求', new Date())
  const method = req.method // 请求的 method
  const url_str = req.url // 请求的 url，字符串类型，格式大致为 /user?name=PPz&year=3
  console.log(method, url_str, req.headers) // headers 里有很多默认参数
  
  res.write('Hello, Node.js')
  res.end()
})

server.listen(8080)
console.log('ok')
