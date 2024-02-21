// CREATE A CLOCK TERMINAL 

// APP : 1 -> 
function clock(){

    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    console.clear();
    console.log(`${hours}:${minutes}:${seconds}`);
}
// console.log(hours);
// console.log(minutes);
// console.log(seconds);
setTimeout(clock,0);
const id = setInterval(clock,1000);


// NEED TO IMPORVE
// APP 2 :  

