/**
  PROMISES : 
  -> MADE TO DOCRESE THE COMPLEXITY OF CALL BACKS 
  -> EASY CODE READABILITY 
  -> A PROMISE HAVE 3 STAGES: pending , resolved , rejected 
  -> When the resolve argument as a function is called inside the promise then only it gets into resolved state 


  SYNTAX : 
  CONST <ANEM> = new Promise( <must be a function and function must have 1 argument==resolve>)

 */

// ->
//   const prom1 = new Promise( function(resolve){
 
//   })

//   console.log(prom1)   // pending 

// ->
const prom1 = new Promise( function(resolve){
 
    setTimeout(function(){
        resolve("promise completed");
    },1000);
 
});

function cb (){
    console.log(prom1);
}

console.log(prom1);
prom1.then(cb);

