
/**
 
SUBSTRING : To get a substring from a string using index 
->returns a substring 
->if startIndex is greater than endIndex, the result is an empty string.
->Negative values for startIndex or endIndex are treated as 0.

<str_name>.substring(startindex,endindex):
->st : (def->0)
->en : (def->(str.length))(not included ) 
 */

let str1 = "01A345";
let str2= "rishi varma";

console.log(str1.substring()); //01A345
console.log(str1.substring(0,4)); //01A3
// slice == substring 
console.log(str1.slice(0,4)); //01A3

console.log(str2.substring(6)); //varma

