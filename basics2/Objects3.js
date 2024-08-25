

//  objects 3 starts from here

const course = {
    courseName : "js in hindi",
    price : 999,
    courseInstructor:"Aditya"
}

course.courseInstructor// sometimes we have to access many times so we can do it in other ways

const {price} = course
console.log(price);



// a way to destructure from arrays of objects
// const objArray =[
//     {
//         courseName : "js in hindi",
//         objprice : 999,
//         courseInstructor:"Aditya"
//     },
//      {
//         courseName : "js in hindi",
//         objprice : 9999,
//         courseInstructor:"Aditya"
//     },
//     {
//         courseName : "js in hindi",
//         objprice : 99999,
//         courseInstructor:"Aditya"
//     }
// ]

// const {objprice} = objArray[0]

// console.log(objprice);



// api and json

// {
//     "name" : "aditya"
//     "courses" : " js"
//     "price": "free"
// }