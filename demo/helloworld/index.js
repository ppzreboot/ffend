const http = require('http')

function handle(req, res) {
  res.write('Hello, Node.js')
  res.end()
}

const server = http.createServer(handle)
server.listen(8080)
console.log('ok')
