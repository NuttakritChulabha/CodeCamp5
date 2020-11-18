let salarise = {
    "John" : 100,
    "Pete" : 300,
    "Mary" : 250
};

function topSalary(salarise){
    let max = 0;
    let nameMax = null;

    for(let name in salarise ){
        if(salarise[name] > max){
            max = salarise[name];
            nameMax = name;
        }
    }
    return nameMax;
}

alert(topSalary(salarise));
alert(topSalary());