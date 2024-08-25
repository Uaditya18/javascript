//  singlonton objects
const tinderUser = new Object();

tinderUser.id = "12345"
tinderUser.name = "Aditya"
tinderUser.isLoggedIn = false;

tinderUser.regularUser = {
    email:"hello@gmail.com",
    fullname : {
        userFullName: {
            firstName : "Aditya",
            lastName : "Upadhyay"
        }
    }
}

//


//combining two objects

// using assing
const obj1 ={
    1:"a",
    2:"a",
    3:"a",
}
const obj2 ={
    4:"b",
    5:"b",
    6:"b",
}
Object.assign(obj1,obj2)  // this will append the properties of obj2 into obj1 and returns obj1
console.log(Object.assign({},obj1,obj2)); // recomended to use this will never change the properties on obj1 nad obj2 but return a new object {}  


//using another object and spread operator

const newobj = {...obj1 , ...obj2} //most recomended spread operator

console.log(newobj);

const user = [
    {
        // object 1
    },
    {
        // object 2
    },
    {
        // object 3
    }
]


console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
