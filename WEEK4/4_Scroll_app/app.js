
// IMPOTANT EVNTS 
 /*
 -> ON CLICK NAV BAR LINKS DIV MUST  BE OPENED  
*/



const navBar = document.querySelector(".nav-bar"); // THIS IS THE BUTTON 
 const linkContainer = document.querySelector(".pages-links"); // PAGE LINKS CLASS UL
const navCenter = document.querySelector(".nav-center");//FULL NAVIGATION 


navBar.addEventListener("click",function(){
   console.log(linkContainer.getBoundingClientRect());
    // pages.classList.toggle("open-pages-links");
    
    if(linkContainer.getBoundingClientRect().height==0){
        // means links container not opened 
        linkContainer.style.height = "200px";

    }
    else{
        linkContainer.style.height = 0;
    }


})


const fullNav = document.querySelector(".nav-center");
const scrollUpBtn = document.querySelector(".scroll-up");

window.addEventListener("scroll" ,()=>{
    
    const scrollHeight = window.pageYOffset;
  const navHeight = fullNav.getBoundingClientRect().height; //the total height on nav 
  console.log(navHeight);
     console.log(scrollHeight);
    if(scrollHeight>navHeight){
        fullNav.classList.add("fixed-nav");
    }
    else{
        fullNav.classList.remove("fixed-nav");
        
    }
      
    // TO ALSO SHOW THE SCROLL TOP LINK 
    
    if(scrollHeight>500){
        console.log("hello")
        scrollUpBtn.classList.add("show-scroll-up")
    }
    else{
        scrollUpBtn.classList.remove("show-scroll-up");
    }
});

// ON CLICKLON LINK SHOULD SMOOTHY SV=CROLL 

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link)=> {
    
    link.addEventListener("click", (e)=>{
        
        // PREVENT THE DEFULT SCROLL TO ID PAGE 
        e.preventDefault();
        
        // to get the href that contains the id and remove # using slice 
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element  =document.getElementById(id);
        const navHeight = fullNav.getBoundingClientRect().height;
        const containerHeight = linkContainer.getBoundingClientRect().height;
        //  to check fixed nav class is present or not 
        const fixedNav = navCenter.classList.contains("fixed-nav");
//   to find the length between id element and nav-center
    let position = element.offsetTop - navHeight;
     
    if(!fixedNav){ 
        // if fixed nav not present means scroll is less than 80 
        position = position - navHeight ; 
    }
    if(navHeight>82){
        position = position + containerHeight; 
    }
    
    // NOW WE SCORLLS 
    window,scrollTo({
        left:0,
        top:position,
    });
    //     now we also need to close lnks container 
    
    linkContainer.style.height = 0;

    } );
});