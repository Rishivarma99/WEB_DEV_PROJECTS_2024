
/**
 
INCLUDES : 
->return true or false 

<str_name>.includes(searchValue , startIndex)
->search value : it is a string to search in a given string 
->startindex : (optional def->0) we can specify where the search can start from 

 */

let str1 = "Hello WOrld"

console.log(str1.includes("o")) // true
console.log(str1.includes("E")) // false

console.log(str1.includes("W")); // true 
console.log(str1.includes("W",7)); //false
