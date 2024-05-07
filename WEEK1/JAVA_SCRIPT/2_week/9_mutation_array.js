// IMPORTANT ⭐

// USING CONST CANT BE REDECLARE WHOLE ARRAY BUT INDIVIDUAL ELEMENTS IN ARRAY 
// CAN BE REDECLARED 

const arr1 = [1,3,5];
const arr2 =[6];
// mutation is nothing but manipulating array 

arr1[0] = 0;
console.log(arr1);
// different methods : push pop shift(to remove first),
// ,slice(start,end) , concat() ,sort , reorder 

console.log(arr1.slice(1,2));
console.log(arr1.concat(arr2));
console.log(arr1.reverse());
console.log(arr1);

