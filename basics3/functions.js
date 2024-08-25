// functions 

// function addNumber(number1, number2){
//     console.log(number1+number2);
    
// }

// addNumber("3",2)


function loginMassage(username = "Aditya"){
    return `${username} just logged in `
}

const msg = loginMassage("Aditya Upadhyay")
console.log(msg);

console.log(loginMassage());



// shoping cart


function calculateCartPrice(...num1){  // rest operater or spread in arrays term
    let sum=0

    for(i=0;i<num1.length;i++){
        sum += num1[i]
    }
    return sum;
}

console.log(calculateCartPrice(200,400,500,200,40));
