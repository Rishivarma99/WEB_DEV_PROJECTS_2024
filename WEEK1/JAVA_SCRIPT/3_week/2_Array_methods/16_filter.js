
// FITER METHOD USED TOP GENERATE NEW ARRAY with some condition  dont modify ori array 


var arr1 = [1,2,3,4,5,6,7,8,9,10];

// generate even number array 

// here in filter it travesr each index and check the function by passing that index element 
// if function inside returns true it adds that number into new array 
var even_number = arr1.filter( function (number){
    // if(number%2==0){
    //     return true ; 
    // }
    // return false;

    return number%2==0 ; // just return true or false 
})

console.log(even_number);

var odd_number = arr1.filter( number => number%2!=0); // using arraw function if single line 
console.log(odd_number);
