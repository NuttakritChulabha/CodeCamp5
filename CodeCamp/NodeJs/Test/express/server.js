const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.send("Hello from Express")
})

app.get('/user', (req, res)=>{
    res.send("User page from Express")
})

app.listen(3000, ()=>console.log("Express server start...3000"))