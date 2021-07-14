function delay(duration){
    return new Promise(()=>{
        setTimeout(logHi, duration)
    })
}
function logHi(){
    console.log("Hi");
}
delay(2000).then(logHi);