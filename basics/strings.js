// const name = "Aditya Upadhyay"
// const repoCount = 40

//console.log(name+repocount+"value")  old method to concatinate string

//console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);
// new way to concatinate string know as string interpolation

const getName = new String('Aditya-Upadhyay')

// some daily use functions
// console.log(getName.length);
// console.log(getName.toUpperCase());
// console.log(getName.charAt(0));
// console.log(getName.indexOf('A'));


const newString = getName.substring(0,4);
console.log(newString);

const sliceString = getName.slice(-4);
console.log(sliceString);

const trimString = "       Aditya      "
console.log(trimString.trim()); // only apply for white spaces not for line terminators

const replaceString = getName;
console.log(replaceString.replace('-',' '));

console.log(getName.split('-',3))

