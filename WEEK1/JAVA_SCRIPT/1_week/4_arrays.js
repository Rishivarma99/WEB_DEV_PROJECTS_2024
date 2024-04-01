// ARAYS : 

var arr1 = ["rishi",23,2.23];

console.log(arr1); //print complete array in []

// NESTED ARRAY : 
var nesArr = [[1,"rishi"] , [2,"varma"]]; //WE CAN HAVE MULTIPLE DATA TYPES 
console.log(nesArr); //print complete array in []

// ACCESING 

console.log(arr1[0]);
console.log(nesArr[0][1]);

// CNAGING

arr1[0] ="Rishvarma";
console.log(arr1[0]);

// ACCES MULTIDIMENTIONAL 
var nesArr2 = [ [ 0 , 1 , 2 ] , [ 3 , 4 , 5 ], [ [6,7,8] , 9 , 10 ] ];

console.log(nesArr2[2][0][1]);

// PUSH AND POP 

nesArr2.push([11,12,13]);
console.log(nesArr2);

var removed1 = nesArr2.pop();
console.log(removed1);
console.log(nesArr2);

// SHIFT() -> USED TO REMOVE FRONT ELEMENT 
nesArr2.shift();
console.log(nesArr2);



