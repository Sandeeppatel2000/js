function addTwoNumbers(num1, num2) {
   let res = num1 + num2 
   return res
    
}
// const res = addTwoNumbers(1,89)

// console.log(res)

function loginUserMessage(username){
   if (username === undefined){
      console.log("Please enter the user name")
      return 
   }
   return `${username} is logged in`
}

// console.log(loginUserMessage("test"));

// console.log(loginUserMessage());


//rest operator (..num)
function calcuateCartPrice(...num){
   return num
}


// console.log(calcuateCartPrice(1,2,3,4,5))



const user = {
   username: "test",
   price:50

}
function handleUser(anyobject){
   console.log(`User name is ${anyobject.username} and teprice is ${anyobject.price}`)
}
handleUser(user)