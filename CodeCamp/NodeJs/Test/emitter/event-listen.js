const { ENGINE_METHOD_PKEY_ASN1_METHS } = require('constants')
const Em1 =require('./event-emit.js')
const em1 = new Em1

em1.emit1()
em1.emit2()

em1.on('onesec',(e)=>{
    console.log(e)
})
em1.on('twosec',(e)=>{
    console.log(e)
})