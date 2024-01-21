

// alert("hi");
const openModalBtn = document.getElementById("show-modal-btn");
console.log(openModalBtn);
const closeBtn = document.querySelector(".close-btn");
console.log(closeBtn);
 
const modalOverlayDiv = document.querySelector(".modal-overlay");
console.log(modalOverlayDiv);

openModalBtn.addEventListener("click" , ()=>{
 
    modalOverlayDiv.classList.add("open-modal");
})

closeBtn.addEventListener("click" , ()=>{
    modalOverlayDiv.classList.remove("open-modal");
})