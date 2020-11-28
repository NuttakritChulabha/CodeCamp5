const express = require('express')
const app = express()
const fs = require('fs')

let data = JSON.parse(fs.readFileSync('./sample.json'))
users = data.users

app.get('/', (req, res)=>{
    let formHTML =`
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf8" >
    </head>
    <body>
    <form action="/dosearch" method="get" >
    <label for="firstName">ชื่อ:</label>
    <input type="text" id="fname" name="firstName"><br><br>
    <input type="submit" value="Submit">
    </form>
    </body>
    </html>
    `
    res.send(formHTML)
})

app.get('/dosearch', (req, res) =>{
    res.send(users.filter( x => x.firstName.includes(req.query.firstName)))
})



app.listen(3000, () => console.log('Server start port-3000.....'))