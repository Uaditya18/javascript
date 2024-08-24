const marval_heroes = ["thor","IronMan","captain"]
const dc = ["superman","flash","batMan"]

// marval_heroes.push(dc) // ==>[ 'thor', 'IronMan', 'captain', [ 'superman', 'flash', 'batMan' ] ]
// console.log(marval_heroes); //problem we don't like this 

const  heroes = marval_heroes.concat(dc) // this will concat two arrays in js
console.log(heroes);

const allheroes = [...marval_heroes, ...dc] //very popular operator spread operator
console.log(allheroes);

// flat operator or function
//  the function flat out all the 2d 3d parts or nested array and makes a simple 1d array
const newArray = [1,2,3,4,[3,4,5,6,[5,6,7],8,9,20,[10,4]]]
const usable = newArray.flat(Infinity)
console.log(usable);



// to convert any data type into array 
console.log(Array.from("aditya upadhyay"));


