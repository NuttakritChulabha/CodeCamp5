const fs =require('fs')
const express = require('express')
const app = express()

let HTML =fs.readFileSync('./login-Post.html')

 app.get('/', (req, res)=>{
     res.write(HTML)
})

 app.post('/', function (req, res) {
    res.send(`${HTML} <br> POST request to homepage`)
    req.put('/')
 })

 app.put('/', function (req, res) {
    res.send(`${HTML} <br> PUT request to homepage`)
 })

 app.delete('/', function (req, res) {
    res.send(`${HTML} <br> DELETE request to homepage`)
 })

 app.listen(8080, ()=>console.log("Express server start...8080"))
