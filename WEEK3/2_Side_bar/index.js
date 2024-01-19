
const button1 = document.getElementById("nav-bar-btn"); 

const sideBarDiv = document.getElementById("sidebar");
const mainDiv = document.getElementById("main"); 

console.log(sideBarDiv);

button1.addEventListener("click", function(){
  
sideBarDiv.classList.toggle("show-bar");

})