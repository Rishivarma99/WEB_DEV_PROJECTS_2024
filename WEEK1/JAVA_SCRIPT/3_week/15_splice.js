
// SPLICE IS USED TO MODIFIY THE ARRAY WE CAN ADD
// REMOVE AND PERLACE 

// splice (startindex=i,deletecount,<itemto_Replaceat i>, <at i+1>....)

var arr1 = [0,1,2,3,4,5];

// 0 says to delete nothing and just add at 1 index 10 
arr1.splice(1,0 ,10);  //[0, 10, 1, 2, 3,  4, 5]

arr1.splice(1,1); //just delete 10 at index 1 and 1 deleteconut
// [0, 10, 1, 2, 3,  4, 5]

console.log(arr1.splice(1,0,20));

console.log(arr1);
