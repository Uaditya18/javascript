// a concept :: Immediatly invoked function Expression(IiFe)

// sometimes we want our funtion immedialy to run or start as soon the system start or any event occur
// ways to use iife

(
    function() {
    console.log("db connected");
    
})();


(
    function lepo(){
console.log("inside function and name of function");

})();

((name)=>{
    console.log(` ${name},iife in arrow functionarrow function`);
    
})("aditya")

// benefits of iife

/*
-for immediate execution of function or start
-to protect the function from pollution of global variable
*/

