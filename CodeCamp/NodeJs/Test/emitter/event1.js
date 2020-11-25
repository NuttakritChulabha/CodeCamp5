const EventEmitter = require('events')
const em1 = new EventEmitter()

//ทำคำสั่งทุกๆ กี่วินาที
setInterval( () => em1.emit('onesec',{id:1, txt: 'One Second'}),1000)



//ทำคำสั่งหลังจากรับ onesec  ตัวอักษรใหญ่ เล็กห้ามผิด ไม่นั้นจะไม่ทำงาน
em1.on('onesec',function(e){
    console.log(`onesec event..${e.id} ${e.txt}`)
})