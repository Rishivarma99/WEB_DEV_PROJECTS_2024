/**
  ASYN FUNCTION AND THIR WORKING 
  -> STACK , WEB APIS , CALLBACK QUEUE 
  -> 
  IN EXAMPLE 1 : 
  ->here settime2 is just 5 seconds so it first gets added to the callback queue 
  ->then the settime1 is added after 10 sec 
  ->both will wait until the present task to com
  -> thses both wait untill the present task is completed like for loop in examp 1 
 */



// EXAMPLE 1 : 
  setTimeout(  function (){
    let a =0 ;
    for(let i=0;i<2;i++){
        a = a + i ;
    }
    console.log("1ST CALL : " + a);
  } , 10000);  // 1st called 
  setTimeout(function (){
    let a =0 ;
    for(let i= 0;i<3;i++){
        a = a + i ;
    }
    console.log("2ND CALL : " + a);
  },5000); // 2nd called 

  let a =0 ;
  for(let i =0 ;i<100000 ;i++){
    a = a + i ;
    console.log(a);
    
}

