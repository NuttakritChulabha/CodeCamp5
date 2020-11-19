function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

alert( rabbit.eats ); // true เพราะอ้างอิงตัวแรกก่อนเขียนทับ

// -------------------------------------------------------------------------------------------------------------------------

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false;

alert( rabbit.eats ); // false เพราะเขียนเข้าไปเพิ่มใน prototype จะมีการอัพเดท

// -------------------------------------------------------------------------------------------------------------------------

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete rabbit.eats;

alert( rabbit.eats ); // true เพราะ eats ไม่ได้อยู่ ใน rabbit =>ข้อสังเกต ไม่เหมือนการอ้างอิงแบบปกติ เพราะปกติสามารถลบถึง prototype ได้

// -------------------------------------------------------------------------------------------------------------------------

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

alert( rabbit.eats ); // undefined เพราะถูกลบจาก  prototype

let obj2 = new obj.constructor();

// -------------------------------------------------------------------------------------------------------------------------

let obj2 = new obj.constructor(); //สามารถทำได้ จะอ้างอิงถึง prototype ต้นทางเดียวกัน