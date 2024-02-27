/**
  TEST : TO CHECK WHETHER A GIVEN REGULAR EXP  IS PRESENT IN THE STRING OR NOT  
  -> REG EXP : /[a-zA-Z0-9\s]/ a exp to check if numbers and letters
  -> ^ is a not in regular expresion   /[^a-zA-Z0-9\s]/ check other than letters number spaces  
 */


  let str1 = "Rishi134";
  let str2 = "!@#R"
  const regrex = /[a-zA-Z0-9]/ ; 
  console.log(regrex.test(str1));  // true 
  console.log(regrex.test(str2));  // true 
