/*
 
PRIMSES : UNDERSATNAD IT  : 

*/


function createAndReturnPromise(){  // no need callbacks 

    const p = new Promise(function(PromiseDone){
     
    setTimeout(function(){
       PromiseDone();
    },5000)

    })
     return p ; 
}

const createPromise = createAndReturnPromise();
console.log(createPromise);

function cb (){
    console.log("this is callback executed after promise is completly done ");
    
}

createPromise.then(cb);



