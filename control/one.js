// if staement 

if(true){

}

// shorthand scope 
if(true) console.log("hello"); // only for single line
  
// SWITCH
const month = 3
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("febuary");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;

    default:
        break;
}


// thruthy and falsy values

// falsy value : 
// false, 0, -0, BigInt 0n, "", null,undefined, NaN


// nullish coalescing operator(??): null undefined

let val1;
val1 = 5 ?? 10;

// ternary opearator

//condition ? true : false
