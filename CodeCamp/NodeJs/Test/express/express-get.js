const express = require('express')
const app = express()
const fs = require('fs')

let data = JSON.parse(fs.readFileSync('./sample.json'))
let users = data.users
let listcounter = 0

app.use('/list', (req, res, next)=>{
    listcounter++
    console.log('Require to /list number :'+listcounter)
    next() //ส่งไปทำงานต่อ ที่ /list อื่น
})

app.get('/list',(req ,res) =>{
    res.send(users)
})

app.get('/listname', (req, res)=>{
    let outHTML ='<ol>'
    users.forEach( x=> {
        outHTML += `<li> ${x.firstName} ${x.lastName} <b>${x.emailAddress}</b></li>`
    })
    outHTML += `</ol>`
    res.send(outHTML)
})

app.get('/user/:uid', (req, res) => {
  res.send(users[parseInt(req.params.uid)-1])
})

app.get('/username/:uname', (req,res)=>{
    res.send(users.find( x => x.firstName === req.params.uname))
})

app.get('/search', (req, res)=>{
    res.send(users.find( x => x.firstName === req.query.uname))
})

app.listen(3000, ()=> console.log('sever start ...'))