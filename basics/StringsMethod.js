//  Stirngs methods 

const string1 = "Aditya Upadhyay is not enough very smart"
const string2 = "Aditya"
const string3 = "Aditya-Upadhyay"
const string4 = ""
const string5 = "d84bf943nf94rbt4t8"
const string6 = "2+5+6*10*10/100"


console.log(string1.length); // return the total legth of the string
console.log(string1.at(-4)); // return the character at that index number the only diffrence with charAt() is on giving negative value it return counting from last
console.log(string1.charAt(2)); // return the character at 2
console.log(string1.concat(string2)); // return the concatination of two strings
console.log(string1.endsWith("smart")); //return boolean value to check at the end of the string
console.log(string1.includes("Aditya"))// return boolean for checking string include the given string or not ;
console.log(string1.indexOf('A')); //returns the index number of first character in string from the left
console.log(string1.localeCompare(string2)); //Returns a number indicating whether the reference string compareString comes before, after, or is equivalent to the given string in sort order.
console.log(string1.repeat(3)); //returs the string repeating 3 times 
console.log(string1.replace("not","")); //replace the new string or char with old onw in the string

console.log(string6.valueOf());


