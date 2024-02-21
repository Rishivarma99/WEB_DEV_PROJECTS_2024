
// prog : CREATE A COUNTER IN JS (30 TO 0)


// will be using setTimeout and setInterval 

// APP 1 : 
let countdown = 10 ;

setTimeout(start,0.5*1000);

 const timerId = setInterval(counter,1*1000);

function counter(){
    console.log(countdown--);
    if(countdown==0){
        clearInterval(timerId);
    }
}

setTimeout(end,11*1000);


function start(){
    console.log("Started");
}

function end(){
    console.log("Ended");
}

// improve 
// -> can we keep in full function 

