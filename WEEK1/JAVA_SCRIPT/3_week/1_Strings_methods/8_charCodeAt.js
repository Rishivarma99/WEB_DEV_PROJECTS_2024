
/**
 charCodeat: returns the ascii valur of a character 
 ->

 <str_name>.charCodeAt(index) 
  ->index : idx of character you want to get the unicode 

 */

  let str1 = "abc";

  console.log(str1.charCodeAt(0)); // 97
  console.log(str1.charCodeAt(-1)); // giving NaN (not a number value)