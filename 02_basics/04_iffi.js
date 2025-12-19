//Immediately Invoked Function Expressions 
// function that get immedietly executed
// to get rid of global scope pollution issue

(function test(){
    console.log("Db connected");
    
})();

( (name) =>{
    console.log(`DB connect with name ${name}`)
})(name);