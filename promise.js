let paymentA = new Promise((resolve,reject)=>{

    let status=false;

    if(status){
        setTimeout(resolve,4000,'success')
    }else{
        reject('failed')
    }


})

paymentA.then(res=>console.log(res))
.catch(err=>console.log(err))

//HANDLE MORE PROMISE
let payment = new Promise((resolve,reject)=>{

    let status=true;

    if(status){
        setTimeout(resolve,4000,'success')
    }else{
        reject('failed')
    }


})

let paymentb = new Promise((resolve,reject)=>{

    let status=false;

    if(status){
        setTimeout(resolve,4000,'successB')
    }else{
        reject('failedB')
    }


})

Promise.allSettled([paymentA,paymentb]).then(res=>console.log(res))
.catch(err=>console.error(err))

Promise.all([paymentA,paymentb]).then(res=>console.log(res))
.catch(err=>console.error(err))

Promise.race([paymentA,paymentb]).then(res=>console.log(res))
.catch(err=>console.error(err))

// 1.Promise with then()

// Create a Promise that resolves with a number. Use .then() to multiply the number by 2 and log the result.
// Promise with catch()



// 2.Create a Promise that randomly either resolves with "Success" or rejects with "Error". Handle both cases using .then() and .catch().
// Chaining Promises

// 3.Create a Promise that returns a number. Chain .then() handlers to:
// Multiply the number by 2
// Add 5 to the result
// Log the final value