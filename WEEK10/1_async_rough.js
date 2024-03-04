
// EXAMAPLE 1 : USE TIMEOUT ASYNC 

// function onDone(){
//     console.log("timout");
// }

// setTimeout(onDone,4000);

// console.log("written after the time out function");

// EXAMPLE 2 :  not working no prob 

const fs = require("fs");


// Async function 
fs.readFile("a.txt", "utf-8", (err,data) =>{
    // a call back function do implement after the read is done 
    if (err) {
        console.error("Error reading file:", err);
        return; // Exit the callback function if there's an error
    }
   

    console.log(data);
});

console.log("this line is after read file line ");
