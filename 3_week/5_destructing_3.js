
// USING DESTRUCTOR IN ARRAYS 

const [x,y, , z] = [1,2,3,4,5,6];
console.log(x,y,z);

var a = 8 ,b= 9 ;

// this is a  Immediately Invoked Function Expressions (IIFEs)
// a function is defined and imeiatly executed 
(
    ()=> {
        "use strict" ;
       [a,b] = [b,a]; 
    }
)
() // this mean it immediately calls the function ****
;

console.log(a);
console.log(b);

// REMOVING FIRST 2 ELEMENTS IN ARRAY USING REST OPERATOR 

const source =[1,2,3,4,5,6,7,8,9];

function removeFirstTwo(list){
  
    // using distructor to remove first to eleemnt and storing the rest in arr1 
   const [,,...arr1] = list;
    return arr1 ; 

}

const arr1 = removeFirstTwo(source);

console.log(source);
console.log(arr1);