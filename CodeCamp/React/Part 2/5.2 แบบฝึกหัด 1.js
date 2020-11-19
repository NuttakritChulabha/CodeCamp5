let dictionary = Object.create(null,{
    toString: {
        value(){
            return Object.keys(this).join();
        }
    }
}
);


dictionary.apple = "Apple";
dictionary.__proto__ = "test"; 

for(let key in dictionary) {
  alert(key); 
}

// your toString in action
alert(dictionary); // "apple,__proto__"