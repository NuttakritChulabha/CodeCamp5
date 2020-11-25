const http =require('http')

http.createServer((req, res) => {
    res.writeHead(200,{
        'content-type' : 'text/html',
        'codecamp' : '#5'
    })
    res.write('........\n')
    res.write('........\n')
    res.end('<h2> ----END---- </h2>')
}).listen(8080, () => {console.log('Sever start....')})