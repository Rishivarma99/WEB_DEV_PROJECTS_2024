/**
  CALL BACK HELL : 
  ->EVENT LOOP AND MAIN THREAD IMPORTANT 
   
  ->
 */

// EXAMPLE 1 : TO CALL MULTIPLE SETTIMEOUT IN SAME FUNCTION 
/**
  ->HERE FOR LOOP IS SMALL TASK AFTER SOME ITERATION THE TIMER IS ALSOCHECKED ADN ECECUTED 
 */
// function callTimeout(){

//     setTimeout( () =>{
//         console.log("Timeout 1");

//         setTimeout( ()=>{
//             console.log("Timeout 2 ");

//             setTimeout(()=>{
//                 console.log("Timeout 3 ");
//             },6000);
//         },4000)
//     },2000)
// }

// callTimeout();

// for(let i=0;i<100000;i++){
//     console.log(i);
// }

// TO SOLVE THIS 
// easy to read 
waitfor(1000)
waitfor(2000)
waitfor(6000)