const user = {
    username : " Aditya Upadhyay",
    id : "ebfu198",
    welcomeMassage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this) // will rerturn the whole object because it is reprsenting in THIS block
    }
}

// user.welcomeMassage() //Aditya Upadhyay, welcome to website
// user.username = "satvik"
// user.welcomeMassage()    //satvik, welcome to website


// console.log(this); // will return empty object {}



// this cann't used in functions
/*function chai() {
    let name = "Aditya Upadhyay"
    console.log(this.name); // undefined  looks like this keyword doesn't work infuntion but only in objects
    
}
chai()*/


// const chai = () => {
//     console.log("hello aditya"); // hello aditya 
//     console.log(this);  // still print undefined no change      //// basics
    
// }

const addTwo=(num1,num2) =>  num1+num2 // implicit return when return in one line

console.log(addTwo(3,5)); // 3+5 = 8

const another=(num1,num2) =>  (num1+num2)  // most used in react
