const http = require('http')
const fs = require('fs')
const url =require('url')

function renderHTML(fileName, req, res) {
    fs.readFile(fileName, (err, data) =>{
        res.writeHead(200,{'content-type':'text/html'})
        res.write(data)
        res.end()
    })
}

http.createServer((req ,res) => {
    let p_url =url.parse(req.url, true)
    console.log(p_url.pathname)
    console.log(p_url.query)

    if(req.url === '/')
        return renderHTML('./login-get.html', req, res)

    if(p_url.pathname === '/getdata')
        res.writeHead(200,{'content-type':'text/html ; charset=utf8'})
        res.write(`<h3>We got your data</h3>`)
        res.write(`ชื่อ ${p_url.query.fname} <br>นามสกุล ${p_url.query.lname}`)
        return res.end()

    res.writeHead(404,{'content-type' : 'text/html'})
    res.write('file not found')
    res.end()

}).listen(8080, ()=> console.log('Server Start...'))