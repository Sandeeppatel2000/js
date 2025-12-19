// this is for current context
const user = {
    username : "John",
    price: 100,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website. `);
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Sam"

// user.welcomeMessage()

// console.log(this)

// function arrowTest(){
//     let username = "John"
//     console.log(this.username)
// }
// arrowTest()

// const test = ()=> {
//     let username = "John"
//     console.log(this.username)
// }


const test = function() {
    let username = "John"
    console.log(this.username)
}


// test()

const addTwoNum = (num1,num2) =>{
    return num1+num2


}

// const addTwoNum = (num1,num2) => num1+num2
// const addTwoNum = (num1,num2) => (num1+num2) no explicit return keyword ids required to add


console.log(addTwoNum(1,2));
