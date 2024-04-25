const http = require('http')

const server = http.createServer((req, res) => {
  console.log('收到请求', new Date())
  const method = req.method
  const url_str = req.url // 请求的 url，字符串类型，格式大致为 /user?name=PPz&year=3
  console.log(method, url_str, req.headers)

  const url = new URL(url_str, 'http://' + req.headers.host)
  const search_params = url.searchParams
  console.log(search_params.get('name')) // 'PPz'
  console.log(search_params.get('year')) // '3'    参数值都是字符串
  console.log(search_params.get('unreal')) // null    不存在的参数值为 null

  res.write('Hello, Node.js')
  res.end()
})

server.listen(8080)
console.log('ok')
