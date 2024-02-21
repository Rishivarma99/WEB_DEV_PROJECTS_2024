// PROG: CALUATE TIME DIFF 

const present = Date.now();
console.log(present);

setTimeout(start,1000);

function start(){
    const functiontime = Date.now();
    console.log(functiontime);
    console.log("start");
    console.log("TIME-DIFF: ", (functiontime-present)-1000);
}

// the differece of functiontime - present is 1029 
// so an extra of 29millisections lag 