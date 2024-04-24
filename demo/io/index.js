const http = require('http')

const server = http.createServer((req, res) => {
  console.log('收到请求', new Date())
  const method = req.method // 请求的 method
  const url = req.url // 请求的 url
  console.log(method, url, req.headers) // headers 里有很多默认参数
  
  res.write('Hello, Node.js')
  res.end()
})

server.listen(8080)
console.log('ok')
