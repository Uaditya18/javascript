// Singleton when you create using cunstructor

//  object liteerals 
// Object.create  1st way to create objects

const mySym = Symbol("key1")
const user = {                      // 2nd way to create objects
  name:"Aditya Upadhyay",              // key:value pair value can be anything but key will always treated as string 
  email: "hello@gmai.com",
  age:18,
  isLoggedIn: true,
  [mySym] : "mysymbol1"
}  


// ways to access object elements

console.log(user.name);     // 1st way
console.log(user["email"]); //2nd way
console.log(user[mySym]);  //Symbol in objects

//freeze 
Object.freeze(user)


