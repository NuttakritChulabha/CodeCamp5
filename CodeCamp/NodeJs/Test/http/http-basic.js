const http =require('http')

function app(req,res){
    console.log('require coming...')
    res.writeHead(200, {'Content-type': 'text/html'})
    res.write('hello world')
    res.end()
}

http.createServer(app).listen(8080)

/* http.createServer( (reg,res) => {
    console.log('require coming...')
    res.writeHead(200, {'Content-type': 'text/html'})
    res.write('hello world')
    res.end()
}).listen(8080) */


/* const server = http.createServer()

server.on('request',(reg,res) => {
    console.log('require coming...')
    res.writeHead(200, {'Content-type': 'text/html'})
    res.write('hello world')
    res.end()
})

server.listen(8080) //ถ้ามีrequire เข้ามาที่ port 3000 ให้ทำคำสั่งด้านบน */