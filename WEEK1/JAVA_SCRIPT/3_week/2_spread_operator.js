

var arr1 = ["JAN","FEB","MAR","APRIL"];

let arr2 ; 

(function (){
    
    //arr2 creates a  shallow copy 
    // arr2 = arr1 ;
    
    // using SPREAD OPERATOR 
    arr2 = [...arr1]; // forms a deep copy 
    arr1[0] = "potato";
}

)();

console.log(arr2);