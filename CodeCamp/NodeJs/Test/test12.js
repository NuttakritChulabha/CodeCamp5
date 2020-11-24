// function showText(text,time){
//     return new Promise((re,rj) => {
//         setTimeout(()=> {
//             console.log(text);
//             re();
//         },time)
//     })
// }


// showText('a',1000)
// .then( () => {return showText('b',1000)})
// .then( () => {return showText('c',1000)})
// .then( () => {return showText('d',1000)})
// .then( () =>console.log('Done'))

//แบบย่อ

function showText(text,time){
    return new Promise(re => {
        console.log(text);
        setTimeout(()=> re() ,time)
    })
}


showText('a',1000)
.then( () =>  showText('b',1000) )
.then( () =>  showText('d',1000) )
.then( () =>  showText('c',1000) )
.then( () =>console.log('Done') )