//  every() returns true or false 
//  if atleast 0 element fails the given codition it return false 

var arr1 = [1,2,3,4];

console.log(arr1.every( function (num){
    return num <0 ;  // return false 
}))

// SOME MEHOD atleast 1 accept return true 
console.log(arr1.some( num => num>3)); // true 
