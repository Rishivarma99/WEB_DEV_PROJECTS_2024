
/**
  ASYNCHRONOUS FUNCTION : ITS WORKING 
 ->
 */


//  EX: 1 -> TIMEOUT

function findSum(n){
    let ans =0 ;
    for(let i=1;i<=n;i++){
        ans += i ;
    }
    return ans ;
}

function sumTill100(){
   console.log(findSum(100));
}

// SETTING TIMEOUT : SET TILL 4 SEC AND JS DONT WAIT FOR 4 SEC 
// TO CONTEXT SWITCH TO NEXT TASK AND PRINTS TIMEOUT WHEN ITS TIEM TO PRINT 
// THIS IS ASYN NATURE 
 setTimeout(sumTill100,4000); 
console.log("print before the timeout dont wwait to complete");
//print before the timeout dont wwait to complete     
//5050