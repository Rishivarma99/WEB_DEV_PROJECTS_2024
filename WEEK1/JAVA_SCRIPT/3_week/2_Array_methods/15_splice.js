
// SPLICE IS USED TO MODIFIY THE ARRAY WE CAN ADD
// REMOVE AND PERLACE 

// splice (startindex=i,deletecount,<itemto_Replaceat i>, <at i+1>....)

var arr1 = [0, 1, 2, 3, 4, 5];

// 0 says to delete nothing and just add at 1 index 10 
arr1.splice(1, 0, 10);  //[0, 10, 1, 2, 3,  4, 5]

console.log("Dlete");
arr1.splice(1, 1); //just delete 10 at index 1 and 1 deleteconut
// [0, 10, 1, 2, 3,  4, 5]

console.log(arr1.splice(1, 0, 20));

console.log(arr1);

var arr2 = [0, 1, 2, 3];

// TO REPLACE A ELEMENT WE NEED TO BOTH DELETE AND REPLACE 

console.log(arr2.splice(1, 1, 0.3));
console.log(arr2);

console.log("array2 after splice : ");
arr2.splice(2, 1, "a", "b");
console.log("***");

let arr3 = [1, 2];
console.log(arr3.splice(0, 1));
console.log(arr3);


