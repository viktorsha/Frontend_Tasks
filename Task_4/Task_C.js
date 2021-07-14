const DELAY = new Promise((resolve, reject)=>{
    try{
        const RANDOMNUMBER = Math.random()*10000;
        if (RANDOMNUMBER<2000){
            resolve("Operation ended successfully");
        } else {
            reject("Operation failed");
        }
    }catch{
        reject("Unknown error");
    }
})
DELAY.then((message)=>console.log(message))
.catch((message)=>console.error(message));