const http = require('http')

const server = http.createServer(async (req, res) => {
    console.log('收到 http 请求')
    const data = await read_json(req)
    console.log('json 接收完毕:', data)
    res.write('json 已收到！')
    res.end()
})

server.listen(8080)
console.log('ok')

function read_json(req) {
    return new Promise((resolve, reject) => {
        let body = ''
        req.on('data', chunk => {
            body += chunk
        })
        req.on('end', chunk => {
            const data = JSON.parse(body)
            resolve(data)
        })
    })
}
