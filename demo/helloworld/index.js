const http = require('http')

const server = http.createServer((req, res) => {
  console.log('收到请求', new Date())
  res.write('Hello, Node.js')
  res.end()
})

server.listen(8080)
console.log('ok')
