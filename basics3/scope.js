



if (true){
    let a = 10 
    const b = 20 
    var c = 30 
}

console.log(a);  // will thorugh an error 
console.log(b);  // will thorugh an error 
console.log(c);  // will print value of c 

// because var declare himself as a global variable

// scopes in web works diffrently as in nodejs


// *************************conceptual******

function addone(value)
{
    return vulae+1;
}
addone(5)

const addTwo = function(num){
    return num+2;
}