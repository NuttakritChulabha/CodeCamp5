const http =require('http');
const fs = require('fs')

let postHtml = fs.readFileSync('./login-Post.html')

http.createServer( (req,res) => {
     let body = ''
     req.on('data', (chunk) => {
         body += chunk
     })
     req.on('end', ()=>{
         body = decodeURI(body) //ตัวแกะข้อมูล ใช้สำหรับภาษาอื่นที่ไมใช่อังกฤษ
         console.log('Body : '+ body)
         res.writeHead(200)
         res.write('<p>' + body +'</p><hr>')
         res.end(postHtml)
     })
}).listen(8080, () => console.log('Server start...') )