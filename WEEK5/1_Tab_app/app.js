


const buttons = document.querySelectorAll(".about-btn");
console.log(buttons);

// APP-1:

// buttons.forEach((btn)=>{

//     btn.addEventListener("click", function(e)
//     {
//         const id = e.target.dataset.id;
//         const contentDiv= document.querySelectorAll(".content");

//     contentDiv.forEach((div)=>{
//         const presentId = div.getAttribute("id");
        
//         if(presentId==id){
//             div.classList.add("active");
//         }
//         else{
//             div.classList.remove("active");
//         }
//       })

//       buttons.forEach((btn2)=>{
//         // const presentId = div.getAttribute("id");
        
//         if(this == btn2){
//             btn2.classList.add("active");
//         }
//         else{
//             btn2.classList.remove("active");
//         }
//       })
//    })

// })


// APP : 2 :WE ARE APPLYING EVENT LISTNER TO WHOLE PAGE 
// AND IT WILL BE INHERITED TO ITS CHILDREN BUTTONS 

const about = document.querySelector(".about-section");
const articles =document.querySelectorAll(".content");
about.addEventListener("click",(e)=>{
    
    const id = e.target.dataset.id;
    // REMOVING AND ADDING CLASS ACTIVE TO BUTTONS 
buttons.forEach((btn)=>{
    btn.classList.remove("active");
})

e.target.classList.add("active");

// ADDING AND REMIVNG ACTIVE CLASS TO ABOUT DESCRIPTION 

 articles.forEach((article)=>{
    article.classList.remove("active");
 })

 const presentArticle = document.getElementById(id);

 presentArticle.classList.add("active");


})