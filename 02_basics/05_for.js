// for(let i=0;i<10;i++){
//     console.log(i);
    
// }

// for of
// const arr =[1,2,3,4,5]
// for (const num of arr){
//     console.log(num);
    
// }


// const greetings = "Hello world"
// for(const greet of greetings){
//     console.log(greet);
    
// }

// Maps 

// const map = new Map()
// map.set('IN',"India")
// map.set("US","USA")
// map.set("FR","France")

// for (const [key,value] of map){
//     console.log(key);
    
// }

//for in 
const myObject = {
    js:"Javascript",
    cpp:"cpp",
    rb:"ruby"
}

// for(const key in myObject){
//     console.log(key);
// }

// const programming= ['js','cpp','python']
// for(const key in programming){
//     console.log(programming[key]);
    
// }


// For each loop
const coding = ['js','python','ruby','cpp','c']

// coding.forEach( function (item) {
//     console.log(item);
    
// })


// coding.forEach((item) => {
//     console.log(item);
    
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)



const myCoding = [
    {
        languageName: "javascript",
        languageFileName:"js"
    },
    {
        languageName: "Python",
        languageFileName:"py"
    },
    {
        languageName: "Java",
        languageFileName:"java"
    }
]


myCoding.forEach((item)=>{
    console.log(item.languageFileName);
    
})

// For each value does not return any thing