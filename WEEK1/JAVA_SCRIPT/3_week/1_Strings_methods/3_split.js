

/**
  SPLIT  : A STRING INTO ARRAY 
  ->return new array 
  ->if no separator given complete string into 1 index of array 
  ->An empty separator("") splits the string into single elements 
  ->both arguments are optional 

  <Sting_name>.split( Separator,limit):
  ->Separator : (no included in result) wheere the split must be perforormed 
  ->limit : it tells Maximum number of splits to perform 
 */
var str1 = "RISHI";
let str2 = "r,i,s,h,i";

console.log(str1.split());  //[ 'RISHI' ]
console.log(str1.split("")); //[ 'R', 'I', 'S', 'H', 'I' ]

console.log(str2.split(",", 2)); //[ 'r', 'i' ] ->limit applied 


let str3 = '3.3+2';
const parts = str3.split(/([+-/*.])/);
console.log(parts);

// console.log(calculate(str3));

let calculate = (str3) => {


  let num1 = parseFloat(parts[0]);
  let num2 = parseFloat(parts[2]);
  let operator = parts[1];

  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2; // Handle division by zero later
    default:
      throw new Error("Invalid operator");
  }

}

