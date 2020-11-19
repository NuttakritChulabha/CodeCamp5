function f() {
    alert("Hello!");
  }

Function.prototype.defer = function(ms){
    setTimeout(this,ms);
}
  
  f.defer(1000); // แสดง "Hello!" หลังจากผ่านไป 1 วินาที