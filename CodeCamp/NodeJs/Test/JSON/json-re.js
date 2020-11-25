const fs = require('fs')
let data , jsonj, users , newdata

data = fs.readFileSync('./sample.json')
jsonj = JSON.parse(data)
// console.log(`${data}`)
users = jsonj.users
console.log(users)

users.map( (x) => {
    x.phoneNumber = x.userId.toString().repeat(7)
    console.log(`Name: ${x.firstName} ${x.lastName} , phoneNumber:${x.phoneNumber}`)

} )

newdata = JSON.stringify(jsonj)
fs.writeFileSync('./output.json',newdata)
console.log('Save output.json OK')