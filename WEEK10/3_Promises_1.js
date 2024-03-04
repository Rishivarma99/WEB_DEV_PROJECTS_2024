/**
 PROMISES AND ASYNC FUNCTION :
 
 ->CREATE A ASYN FUNCTION : 
   -> APP1 : wrapping around a async function 
   -> this could lead to callback hell 

   -> App2 : using promises for clear code 
   IN NEXT PROMISE 

   ->DIFF between app1 and app2 : 
   ->App1 does not return anything and take a cb function as an input and it perform cb function inside 
   ->App2 return a promise does not take cb function this make to write a clear code and after asyn function excution done
    then we need to tell what to do 
 */

// App-1 : 
// function myOwnTimeout(fn,duration){ // this func not reach webapi 
    
//     // settimeout is a asyn function 
//     setTimeout(fn,duration);
// }

// // HERE I AM CALLING A SIMPLE FUNCTION WITH ARGUMENT AND CALLBACKS 
// // AND THIS FUNCTION TURNS OUT TO BE A ASYN MEANS DELIGATE THE WORK TO OTHERS BY IMPLEMENTING A SET TIMEOUT FUNCTION |
// // NOW HERE MYoWNtIMEOUT IS AN ASYN FUNCTION 

// myOwnTimeout( function (){
//     console.log("the function is done ");
// },2000);

// App : 2 - using promises 

function promisified(duration){
 

  const p = new Promise( function(resolve,reject) {
     
    setTimeout( ()=>{
      resolve();
    },duration);
    
  })
  return p ;
   
}


const ans1 = promisified(2000); // saying that pleses send asyn for 2 seconds 
console.log(ans1);
ans1.then( function(data){
   
  console.log("timeout");

});