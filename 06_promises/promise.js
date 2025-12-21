// promise creation
// const promise1 = new Promise(function(resolve,reject){
//     // do an asyn task
//     // DB call, cryptography, network call

//     setTimeout(function(){
//         console.log("Async task  1 is completed");
//         resolve()
//     }, 1000)
// })

// promise1.then(function(){
//     console.log("Promise 1 consumed");
    
// })


// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2 is completed")
//     },1000)
// }).then(function(){
//     console.log("Promise 1 consumed")
// })

// const promise3 = new Promise(function(resolve, reject){
//         setTimeout(function(){
//             resolve({username:"John", email:"test@gmail.com"})
//         }, 1000)


//     })

//     promise3.then(function(user){
//         console.log("User : ", user);
        
//     })

// const promise4 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if(error){
//             console.log("Error occured")
//             reject("ERROR: Something went wrong")
//         }
//         else{
//             resolve({
//                 username:"John", password:"12345"
//             })
//         }
//     },100)
// })

// const username = promise4.then((user) =>{
//     console.log("USer : ", user);
//     return user.username
    
// }).then((username)=>{
//     console.log("Username : ", username)
// }).catch(function(error){
//     console.log("err : ",error);
// }).finally(()=>{console.log("The promise is either resolved or rejected.")})

// console.log("*********************************")

// const promise5 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true; 
//         if (!error){
//             resolve({username:"BOB",email:"bob@gmail.com"})
//         }
//         else{
//             reject("Error: JS went wrong")
//         }
//     },1000)
// })


// async function consumePromise5(){
//     try{
//         const response = await promise5
//         console.log(response);
//     }
//     catch(error){
//         console.log(error);
        
//     }

// }


// consumePromise5()


 
