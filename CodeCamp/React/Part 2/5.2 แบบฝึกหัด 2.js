function Rabbit(name) {
    this.name = name;
  }

  Rabbit.prototype.sayHi = function() {
    alert(this.name);
  };
  
  let rabbit = new Rabbit("Rabbit");

rabbit.sayHi(); //Rabbit
Rabbit.prototype.sayHi(); //undefined 
Object.getPrototypeOf(rabbit).sayHi(); //undefined => เหมือนกับ  Rabbit.prototype.sayHi()
rabbit.__proto__.sayHi(); //undefined => เหมือนกับ Object.getPrototypeOf(rabbit).sayHi();