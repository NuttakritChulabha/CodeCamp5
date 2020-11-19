let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
    stomach: [], // add stomach: []
    __proto__: hamster
  };
  
  let lazy = {
    stomach: [], // add stomach: []
    __proto__: hamster
  };
  
speedy.eat("apple");
alert( speedy.stomach ); // apple

alert( lazy.stomach ); // ว่าง