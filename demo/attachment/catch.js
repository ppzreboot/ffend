function read_json(req) {
    return new Promise((resolve, reject) => {
        let body = ''
        req.on('data', chunk => {
            body += chunk
        })
        req.on('error', err => {
            console.error('接收 json 时发生异常')
            reject(err) // 抛给上级
        })
        req.on('end', chunk => {
            try {
                const data = JSON.parse(body)
                resolve(data)
            } catch (err) {
                console.error('解析 json 时发生异常')
                reject(err)
            }
        })
    })
}
