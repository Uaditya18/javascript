const mynums = [1,2,3,4,5,6,7,8,9,10]


// maps for maping some additional methods
// const newnums =mynums.map((nums)=>nums+10)
// console.log(newnums);


// chaining

const newnums = mynums.map(
    (num) => num*10)
    .map((num) => num+10)    

console.log(newnums);
