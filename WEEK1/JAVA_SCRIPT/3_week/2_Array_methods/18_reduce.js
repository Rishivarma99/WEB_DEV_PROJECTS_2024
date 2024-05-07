
/**
  REDUCE : (FUNCTION(ACCUMULATOR,NUMBER) , ACCUMULATOR INTIAL VALUE ) 

 */
var arr1 = [1,2,3,4,5];


const sum =arr1.reduce( function(acc ,number){
    acc += number;
    return acc;  // MUST RETURN ACC 
},0);
console.log(sum);