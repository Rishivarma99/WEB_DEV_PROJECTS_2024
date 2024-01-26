// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.



const preloader =document.querySelector(".preload-div");
const buttons = document.querySelector(".switch-btn");
const video = document.querySelector(".video");

window.addEventListener("load" , function(){

    preloader.classList.add("hide-preload-div");
})

buttons.addEventListener("click", function(e){
    console.log(e.target.textContent);
    if(e.target.textContent == "Pause"){
        buttons.classList.add("slide");
        video.pause();

    }
    else if (e.target.textContent == "Play"){
     buttons.classList.remove("slide");
     video.play();

    }
})