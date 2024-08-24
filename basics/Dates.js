// let myDate = new Date();
// console.log(myDate.toString()); //Sat Aug 24 2024 19:32:09 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Sat Aug 24 2024
// console.log(myDate.toISOString()); //2024-08-24T19:32:09.134Z
// console.log(myDate.toJSON()); //2024-08-24T19:32:09.134Z
// console.log(myDate.toLocaleDateString());//  8/24/2024
// console.log(typeof myDate); //object


// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toDateString());


// let newDate = new Date("09-01-2024")
// console.log(newDate.toDateString());


// let myTimeStame = Date.now()
// console.log(myTimeStame);

// console.log(myCreatedDate.getTime());



let newDate = new Date();
console.log(newDate.getDate());


newDate.toLocaleString(
    'default', {
        weekday:"long",
    }
)