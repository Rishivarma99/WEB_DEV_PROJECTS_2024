
/**
 
  parseInt: to convert string to integer 
  parseFloat : for decimal numbers 
  ->returns a integer value a parsed number 
  ->if convertion fails return nan
  ->if string in non numeric we will get NaN return 

  parseInt(string , radix) :
  radix : (def->10) range (2-36)

 */

  let str1 = "h10";
  let str2 = "10hello";
  let str3 = "3.14";
  let num1 = parseInt(str1);
  console.log(num1); // NaN 

  console.log(parseInt(str2)); // 10
  
  console.log(parseInt(str3)); //3
  console.log(parseFloat(str3)); //3.14
  

