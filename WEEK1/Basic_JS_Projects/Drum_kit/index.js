

function getalert()
{
    alert("CLICKED");
}

var n1 = document.querySelectorAll(".drum").length;

// FOR BUTTON CLICK 
for(var i =0; i< n1 ; i++){
    
    // HERE FOR LOOP JUST ADDS THE EVENT LISTNER FOR EVEY ELEMENT 
    // WHEN WE CLICK ON THAT ELEMENT THEN FUNTION IS CALLED 
    document.querySelectorAll(".drum")[i].addEventListener("click",function ()
    {
        // here this belongs to the preent element which is getteing added eventlistner 
        // this.style.color="white";
        //  *********WE USE SWITCH STATEMENTS 
         
        var buttonInnerHtml = this.innerHTML;
         makesound(buttonInnerHtml);  
         
         buttonAnimation(buttonInnerHtml);
    });
}

// ADD KEYBOARD EVENTLISTNER 

document.addEventListener("keydown",function (event){
    // console.log(event.key);
    // console.log(event);

  makesound(event.key);
  buttonAnimation(event.key);
})


function makesound (key){
    
    switch (key) {
        case "w":
        var tom1 = new Audio("./sounds/tom-1.mp3");
        tom1.play();
        break;
        case "a":
        var tom2 = new Audio("./sounds/tom-2.mp3");
        tom2.play();
        break;
             
        case "s":
        var tom3 = new Audio("./sounds/tom-3.mp3");
        tom3.play();
        break;

        case "d":
        var tom4 = new Audio("./sounds/tom-4.mp3");
        tom4.play();
        break;
        
        case "j":
        var audio = new Audio("./sounds/crash.mp3")   
        audio.play();
        break; 
        case "k":
        var audio = new Audio("./sounds/kick-bass.mp3")   
        audio.play();
        break;
        case "l":
        var audio = new Audio("./sounds/snare.mp3")   
        audio.play();
        break;

        default:
            console.log("not valid");
         
    }
}

function buttonAnimation(key){
      
    var activeButton =  document.querySelector("." + key);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    } , 200);

     
}











// ****************************************************
// document.querySelector(".w").addEventListener("click", function (){
//     var audio = new Audio("./sounds/tom-1.mp3");
//           audio.play();
// })
// document.querySelector(".a").addEventListener("click", function (){
//     var audio = new Audio("./sounds/tom-2.mp3");
//           audio.play();
// })

// document.querySelector(".s").addEventListener("click", function (){
//     var audio = new Audio("./sounds/tom-3.mp3");
//           audio.play();
// })

// document.querySelector(".d").addEventListener("click", function (){
//     var audio = new Audio("./sounds/tom-4.mp3");
//           audio.play();
// })

// document.querySelector(".j").addEventListener("click", function (){
//     var audio = new Audio("./sounds/crash.mp3");
//           audio.play();
// })

// document.querySelector(".k").addEventListener("click", function (){
//     var audio = new Audio("./sounds/kick-bass.mp3");
//           audio.play();
// })

// document.querySelector(".l").addEventListener("click", function (){
//     var audio = new Audio("./sounds/snare.mp3");
//           audio.play();
// })


// document.querySelector(".w").addEventListener("keydown", function (){
//     var audio = new Audio("./sounds/tom-1.mp3");
//           audio.play();
// })