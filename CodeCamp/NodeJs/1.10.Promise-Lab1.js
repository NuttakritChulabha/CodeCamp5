function setTimeoutAndLog(text,time){
    return new Promise(re => {
        setTimeout(()=> {
            console.log(text);
            re()} ,time)
    })
}


setTimeoutAndLog('a',1000)
.then( () =>  setTimeoutAndLog('b',1000) )
.then( () =>  setTimeoutAndLog('c',1000) )
.then( () =>  setTimeoutAndLog('d',1000) )
