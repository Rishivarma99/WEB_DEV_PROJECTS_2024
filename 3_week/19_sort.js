

// SORT FUNTION IS AN INPLACE FUNCTION 

// TAKES THE COMPARITION FUNCTION AS ARG AND THIS FUNCTION RETURN 0,-,+


var arr1 = [5,4,3,21] ; 
var arr2 = ["b" , "d" , "a"];

// console.log(arr1.sort()); // gives [21,3,4,5] AS SORT TREATS AS STRINGS AND IN STRINGS 2COMES FIRST 

console.log(arr1.sort( function (a,b){  // BASIC SORT FUNCTION 
    return  a - b ;  // THIS SORT ELEMENT IN CORRECT ORDER IMP**********
}))