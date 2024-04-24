const http = require('http')

const server = http.createServer((req, res) => {
  console.log('收到请求', new Date())
  const method = req.method
  const url = req.url
  console.log(method, url, req.headers)

  // res.write('Hello, Node.js')
  res.writeHead(200, {
    'content-type': 'application/json',
  })
  const user = {
    name: 'PPz',
    year: 3,
    adult: false,
  }
  res.write(JSON.stringify(user))
  res.end()
})

server.listen(8080)
console.log('ok')
