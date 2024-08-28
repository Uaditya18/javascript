// for of loop

// const arr = [1,2,3,4,5,6,7,8,10]

// for (const num of arr) {
//     console.log(num);
    
// }

// const greetings = "Hello worlds"

// for(const greet of greetings){
//     console.log(greet);
    
// }


// Maps 

const map = new Map()
map.set('In',"India")
map.set('USA',"United States Of America")
map.set('Fr',"France")

// console.log(map);
// simple iteration
for(const key of map){
    console.log(key);
    
}

//destructure of map into array then acssesing each term diffrently
for(const [key,value] of map){
    console.log(key,value);
    
}

const obj = {
    name: "aditya Upadhya",
    class : "7a"
}
for(let i=0;i<obj)
