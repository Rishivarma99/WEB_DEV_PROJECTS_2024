
// PROG : FUNCTION FOR SUM OF TWO NUMERBS 

// CALL BACK 
function sum(a,b,fnToCall){
    let result = a + b ;
    fnToCall(result);
}

function result(data){
    console.log("Result of sum is : " + data);
}
function resultPassive(data){
    console.log("Sums result is : " + data);
}

// we need to call one function and run all other 

const ans  = sum (1,2,result);
