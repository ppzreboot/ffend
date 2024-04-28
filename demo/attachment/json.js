const http = require('http')

const server = http.createServer((req, res) => {
    console.log('收到 http 请求')

    let json_str = ''
    req.on('data', chunck => {
        console.log('收到一段 json')
        json_str += chunck // 拼接
    })

    req.on('end', () => {
        const data = JSON.parse(json_str) // 解析
        console.log('json 接收完毕:', data)
        res.write('json 已收到！')
        res.end()
    })
})

server.listen(8080)
console.log('ok')
