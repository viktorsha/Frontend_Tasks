const delay = new Promise((resolve, reject)=>{
    try{
        const randomNumber = Math.random()*10000;
        if (randomNumber<2000){
            resolve("Operation ended successfully");
        } else {
            reject("Operation failed");
        }
    }catch{
        reject("Unknown error");
    }
})
delay.then((message)=>console.log(message))
.catch((message)=>console.error(message));