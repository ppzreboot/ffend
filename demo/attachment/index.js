const http = require('http')

const server = http.createServer((req, res) => {
    req.on('data', chunck => {
        console.log('收到一小段数据:', chunck)
    })
    req.on('end', () => {
        console.log('body 接收完毕')
        res.write('大文件已收到！')
        res.end()
    })
})

server.listen(8080)
console.log('ok')
