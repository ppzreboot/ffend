const http = require('http')

const routes = [
  { method: 'GET', path: '/user', handle: get_user },
  { method: 'DELETE', path: '/user', handle: delete_user },
  { method: 'POST', path: '/user', handle: create_user },
  // ...
]

const server = http.createServer(async (req, res) => {
  console.log('收到请求', new Date())
  const method = req.method
  const url = new URL(req.url, 'http://' + req.headers.host)
  
  const route = routes.find(
    route => route.method == method && route.path == url.pathname
  )

  if (!route.handle) { // handle 不存在时
    res.writeHead(404)
    res.write('未找到资源')
    res.end()
    return
  }

  try {
    // route.handle(req, res)
    await route.handle(req, res) // 大部分情况下，handle 都是异步的
  } catch(err) { // handle 发生异常时
    console.error(`处理请求 ${method} ${url.pathname} 时，发生异常`)
    console.error(err)
    res.writeHead(500)
    res.write('服务器内部错误')
    res.end()
    return
  }
})

server.listen(8080)
console.log('ok')

// 封装“响应 json”操作
function respond_json(res, data) {
  res.setHeader('Content-Type', 'application/json')
  res.write(JSON.stringify(data))
  res.end()
}

// 用于处理“获取用户”请求
function get_user(req, res) {
  const users = [ // 真实的后端程序里，这一步的数据要从数据库查询
    { name: 'PPz', year: 3 },
    { name: 'CCz', year: 2 },
  ]
  respond_json(res, users)
}

// 用于处理 “删除用户” 请求
function delete_user(req, res) {
  // 删除用户
  // 假装已经删除了
  res.write('ok')
  res.end()
}

// 未实现的 “创建用户”
function create_user(req, res) {
  throw Error('现在还不能创建用户')
}
