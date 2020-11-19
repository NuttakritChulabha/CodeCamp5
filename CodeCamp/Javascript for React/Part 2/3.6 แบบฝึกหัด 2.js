function f(a, b) {
  alert( a + b );
}

Function.prototype.defer = function(ms){
  let f = this; //เก็บชื่อ obj เพื่อเอาไปใช้ ใน function ที่ถูกเรียกใช้ต่อ ตรง return
  return function(a,b){
    setTimeout(()=>f(a,b),ms) //เรียกใช้ f(a,b) เมื่อผ่านไป ms
  }
}

f.defer(1000)(1, 2); // แสดง 3 หลังจากผ่านไป 1 วินาที