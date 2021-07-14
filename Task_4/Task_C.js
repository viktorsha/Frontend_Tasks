let delayPromise = new Promise((resolve, reject)=>{
    try{
        let randomNumber = Math.random()*10000
        if (randomNumber<2000){
            resolve("Operation ended successfully")
        } else {
            reject("Operation failed")
        }
    }catch{
        reject("Unknown error")
    }
})
delayPromise.then((message)=>console.log(message))
.catch((message)=>console.error(message))