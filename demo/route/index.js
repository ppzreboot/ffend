const http = require('http')

const routes = [
  { method: 'GET', path: '/user', handle: get_user },
  { method: 'DELETE', path: '/user', handle: delete_user },
  // ...
]

const server = http.createServer((req, res) => {
  console.log('收到请求', new Date())
  const method = req.method
  const url = new URL(req.url, 'http://' + req.headers.host)
  
  const handle = routes.find(
    route => route.method == method && route.path == url.pathname
  )
  handle(req, res)
})

server.listen(8080)
console.log('ok')

// 用于处理“获取用户”请求
function get_user(req, res) {
  const users = [ // 真实的后端程序里，这一步的数据要从数据库查询
    { name: 'PPz', year: 3 },
    { name: 'CCz', year: 2 },
  ]
  respond_json(users)
}

// 用于处理“删除用户”请求
function delete_user(req, res) {
  // 删除用户
  // 假装已经删除了
  res.write('ok') // 正式的后端不会只返回 'ok'，但本章先只关注 route 和 router
  res.end()
}

// 封装“响应 json”操作
function respond_json(res, data) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  })
  res.write(JSON.stringify(data))
  res.end()
}
