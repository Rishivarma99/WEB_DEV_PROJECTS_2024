
// PROG : TO DEMONSTRATE CALL BACK FUNCTION 


// -> NOT USING CALLBACK 

// function calculateArthimetic(a,b,type){
    
//     if(type == "sum"){
//         let result = sum(a,b);
//         return result ; 
//     }

// }

// function sum (a,b){
//     console.log("hi");
//     let result = a+b;
//     return result;
// }
// // ALWAYS PASS STRING ARGUMENTS IN " " LIKE "SUM" ->
// const ans = calculateArthimetic(2,3,"sum");
// console.log(ans);

// -> USING CALLBACK 
function calculateArthimatic(a,b,functionCall){
    let result = functionCall(a,b);
    return result ;
}
function sum (a,b){
    return a+b; 
}
function sub (a,b){
    return a-b;
}

// We are calling directly the function as an argument 
// A function is calling back another function
console.log(calculateArthimatic(2,3,sum));
console.log(calculateArthimatic(5,3,sub));
