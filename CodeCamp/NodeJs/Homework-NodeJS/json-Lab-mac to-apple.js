const fs = require('fs')
let data , jsonj, users , newdata

data = fs.readFileSync('./sample.json')
jsonj = JSON.parse(data)
users = jsonj.users


users.map( (x) => {
    console.log(`Before Name: ${x.firstName} ${x.lastName}`)
    if(x.lastName === "mac") x.lastName = "Apple"
    console.log(`After Name: ${x.firstName} ${x.lastName}`)
})

// newdata = JSON.stringify(jsonj)
// fs.writeFileSync('./apple-put.json',newdata)
// console.log('Save output.json OK')