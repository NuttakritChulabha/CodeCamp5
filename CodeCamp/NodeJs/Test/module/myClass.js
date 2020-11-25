const { threadId } = require("worker_threads")

const rd =require('./myUtil.js')

class Human {
    constructor(name ,age = rd.getRandom(20,30)){
        this.name = name
        this.age = age
    }
    info() { console.log(this.name,this.age)}
}

module.exports.Human = Human