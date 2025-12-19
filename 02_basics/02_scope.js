
let a = 300
if (true){
    let a = 10
    const b = 20 
    // console.log(a)
}

// console.log(a);
// console.log(b);


function one(){
    const username = "John"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}
// one()



console.log(addOne(5))
function addOne(num){
    return num+1

}


// Hoisting : there is anisse because of the fucntion expression
addTwo(5)
const addTwo = function(num){
    return num+2
}
