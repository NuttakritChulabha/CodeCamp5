const http = require('http')


//setHeader
http.createServer((req ,res)=>{
    res.statusCode = 200
    res.setHeader('content-type', 'text/html; charset=utf8')

    
    if(req.url === '/'){
        res.write('<h2>This is home page</h2>')
        for(let i=1; i<7; i++)
         res.write(`<h${i}> ยินดีต้อนรับ ครั้งที่ ${i} </h${i}>`)
        return res.end()
    }
    
    function from(req,res){
        res.write(`
        <!DOCTYPE html>
        <html>
        <body>
        
        <h2>Password field</h2>
        
        <p>The <strong>input type="password"</strong> defines a password field:</p>
        
        <form action="/action_page.php">
          <label for="username">Username:</label><br>
          <input type="text" id="username" name="username"><br>
          <label for="pwd">Password:</label><br>
          <input type="password" id="pwd" name="pwd"><br><br>
          <input type="submit" value="Submit">
        </form>
        
        <p>The characters in a password field are masked (shown as asterisks or circles).</p>
        
        </body>
        </html>
        `)
        return res.end()
    }

    if(req.url === '/user'){
        return from(req,res)
    }

    res.statusCode = 400
    res.statusMessage = 'Not Found in our site..'
    res.setHeader('content-type', 'text/html')
    res.write(res.statusMessage)
    res.end('<hr><h3>Not Found</h3><hr>')
    
}).listen(8080, ()=> {console.log('Server Start .....')})









//writeHead
/* http.createServer((req ,res)=>{
    res.writeHead(200,{
        'content-type' : 'text/html'
    })

    if(req.url === '/'){
        res.write('<h2>This is home page</h2>')
        return res.end()
    }

    if(req.url === '/user'){
        res.write('<h2>This is user page</h2>')
        return res.end()
    }

    res.writeHead(404,'Not Found in our site..',{'content-type' : 'text/html'})
    res.end('<hr><h3>Not Found</h3><hr>')

}).listen(8080, ()=> {console.log('Server Start .....')})
 */