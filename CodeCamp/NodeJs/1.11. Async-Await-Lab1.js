
function showText(text,time){
    return new Promise(re => {
        console.log(text);
        setTimeout(()=> re() ,time)
    })
}

/* async function runText(){
    try{    
        await showText('a',1000)
        await showText('b',1000) 
        await showText('c',1000) 
        await showText('d',1000) 
        console.log('Done') 
    } catch(err) {
        console.log(err)
    }
}

runText() */

(async () => {
    try{    
        await showText('a',1000)
        await showText('b',1000) 
        await showText('c',1000) 
        await showText('d',1000) 
    } catch(err) {
        console.log(err)
    }
}) () //IIFE

