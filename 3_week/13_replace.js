

let str1 = "hi this \n is rishi" ; 
let str2 = "roll num 505 " 
let str3 = "email rishivarma@gmail.com";

// (/)-> marks the begin and end of regular exp or pattern
// g -> the global flag pattern must match all occurance of char whithin string 

// (/./g) : to replace whole string char into * -> we use /./g
let ans1 = str1.replace(/./g,"*")  // ******** /n *********

console.log(ans1);

//  (/\d/) : to replace a FIRST SINGLE digit 
//  (/\w/ ) : ONLY FIRST letter,number,underscore
// USING /pattern/g WILL APPLY TO EV3ERYTHIING 

// let ans2 = str2.replace(/\d/,"*") //roll num *05
// let ans2 = str2.replace(/\w/,"*") //  *oll num 505
// let ans2 = str2.replace(/\d/g,"*") //roll num ***

console.log(ans2);


