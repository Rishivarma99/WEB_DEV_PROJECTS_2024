 /* 
 REPLACE FUNCTION  : 
 ->Creates a new string due to string immutability 
 ->USED TO REPLACE CERTAIN GIVEN TARGET

 <str_name>.replace(target,replacement) 

  -> Target : 
      (/)-> marks the begin and end of regular exp or pattern
      g -> the global flag pattern must match all occurance of char whithin string
      (/\d/) : to replace a FIRST SINGLE digit 
      (/\w/ ) : to replace characters , char_numbers(0-9) , _ (underscore)
      (/./) : for all characters and digits and & also 
      (/./g) : we can use g to applt for everything 
    
  -> Replacement : 
     ->will be giving a string in " "
 */


let str1 = "RISHI" ; 
let str2 = "505" 
let str3 = "6varma&";
let str4 = "Hello World";


console.log(str1.replace( /\w/,"*"));  //*ISHI 
console.log(str1.replace( /\w/g,"*"));  //*****

console.log(str2.replace(/\d/,"*")); //*05

console.log(str3.replace(/\w/,"*")); //*varma&
console.log(str3.replace(/./g,"*"))  //*******

console.log(str4.replace("W","e"));  // cant change the string at a certain index 

// let ans2 = str2.replace(/\d/,"*") //roll num *05
// let ans2 = str2.replace(/\w/,"*") //  *oll num 505
// let ans2 = str2.replace(/\d/g,"*") //roll num ***
// console.log(ans2);