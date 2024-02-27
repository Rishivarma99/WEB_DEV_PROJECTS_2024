
/**
 
 CALLS BACK FUNCTION : 
 ->WHEN WE CAN SEND A FUNCTION AS AN ARG FOR ANOTHER FUNCTION THEN 
   IT IS CALLED CALLBACK 

 */


 function square(n){
    return n*n ;
 }
 function cube(n){
    return n*n*n ;
 }


//  function sumofsquares(a,b){
//     let square1 = square(a); //extra
//     let square2 = square(b); //extra

//     return square1 + square2 ; 
//  }
//  function sumofcubes(a,b){
//     let cube1 = cube(a);    //extra
//     let cube2 = cube(b);    //extra 

//     return cube1 + cube2 ; 
//  }

// RATHER THAN THE ABOVE WE PASS THE FUNCTION WATH TO ECECUTE 

function sumof(a,b,fn){
    console.log(fn);
    let value1 = fn(a);
    let value2 = fn(b);

    return value1 + value2 ; 
}

// here square and cube are function 
// 3 ARGUMENT IS CALL BACK FUNCTION 
 console.log(sumof(1,2,square)); 

//  ANONYMOUS FUNCTION S  ->WITHOUT A NAME 
 console.log(sumof(1,2, function (n){
    return n * n* n ;
 }));

