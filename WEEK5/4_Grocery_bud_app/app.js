// ****** SELECT ITEMS **********

const container = document.querySelector(".grocery-container")
const list = document.querySelector(".grocery-list");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const form = document.querySelector(".grocery-form");
const clearBtn=document.querySelector(".clear-btn")
const submitBtn=document.querySelector(".submit-btn")
// edit option

let editElement;
let editFlag=false;
let editID="";


// ****** EVENT LISTENERS **********
// we need to add event listner to window , submit button in form(add and edit) , clear items in list 

window.addEventListener("DOMContentLoaded", setupItems);

form.addEventListener("submit" , addItem);

clearBtn.addEventListener("click",clearItems);


// ****** FUNCTIONS **********

function addItem(e){
    e.preventDefault();

    const value= grocery.value;

    const id = new Date().getTime().toString(); // converting a unique time stam to string 
   
    // jsut add elment not edit 
    if( value !== "" &&  !editFlag){
        const element = document.createElement("article");

        // CREATING A NEW ATTRIBUTE 
        let attr = document.createAttribute("data-id");
        attr.value = id;
        // ADDING ATTRIBUTE TO ELEMENT 
        element.setAttributeNode(attr);
        // ADDING CLASS AND INNERHTML
        element.classList.add("grocery-item");
        element.innerHTML = `<p class="title">${value}</p>
                <div class="btn-container">
                  <!-- edit btn -->
                  <button type="button" class="edit-btn">
                    <i class="fas fa-edit"></i>
                  </button>
                  <!-- delete btn -->
                  <button type="button" class="delete-btn">
                    <i class="fas fa-trash"></i>
                  </button>
                </div>
              `;
    
        // add event listeners to both buttons;
        // ISIDE WE ARE ADDING EVNET LISTNER FOR ELEMENT.BUTTON
        const deleteBtn = element.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", deleteItem);
        const editBtn = element.querySelector(".edit-btn");
        editBtn.addEventListener("click", editItem);
    
        // append child
        list.appendChild(element);

        displayAlert("item added to list", "success");

        container.classList.add("shop-container");
        setBackToDefault();
        
        // add value to local strorage 
        addToLocalStorage(id,value);
    }

    else if( value !== "" && editFlag){
        // to edit 
        editElement.innerHTML=value ; 
        displayAlert("value changed" , "success");

        editLocalStorage(editID,value);
        setBackToDefault();
    }
    else{
        displayAlert("please enter the value", "danger");
    }
     
}

function clearItems(){
//    select all grocery items 
    const items = document.querySelectorAll(".grocery-item");
    if(items.length>0){
        items.forEach(item=>{
            // to remove iteam in a list 
            list.removeChild(item);
        });
    }
    container.classList.remove(".show-container");
    displayAlert("empty list" , "danger");
    setBackToDefault();
    // TO ROMVE THE WHOLE LIST 
    localStorage.removeItem("list");

}


function deleteItem(e){
//   get article 
const element= e.currentTarget.parentElement.parentElement;
const id = element.dataset.id;

list.removeChild(element);
if(list.children.length ===0){
    container.classList.remove("show-container");
}
displayAlert("item removed","danger");

setBackToDefault();
removeFromLocalStorage(id);

}

function editItem(e){

    const element = e.currentTarget.parentElement.parentElement;

    editElement=e.currentTarget.parentElement.previousElementSibling;
    grocery.value = editElement.innerHTML;
    editFlag=true;
    editID=element.dataset.id;
    submitBtn.textContent="edit";
}


// ****** LOCAL STORAGE **********

function getLocalStorage(){
    // ternary operator 
    // ***
    return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list") ): [] ;
}

function addToLocalStorage(id,value){

    const grocery = {id,value};
    let items = getLocalStorage();
    items.push(grocery);
    // update the local storage 
  localStorage.setItem("list", JSON.stringify(items));
    
}
function removeFromLocalStorage(id){
    let items = getLocalStorage();

    items=items.filter(function(item){
        if(item.id!==id){
            return item;
        }
    });
     
    // again setting the items to loacal storage after deleting item 
    localStorage.setItem("list",JSON.stringify(items));
}

function editLocalStorage(id,value){
 
    let items = getLocalStorage();
    items = items.map(item => {
        if(item.id == id ){
            item.value=value;
        }
        return item;  // as map we need to return an item 
    });
    localStorage.setItem("list",JSON.stringify(items));

}

// ****** SETUP ITEMS **********

function setupItems(){
    // first get local storage 
    const items = getLocalStorage();
    
    if(items.length>0){
        items.forEach(item => {
            createListItem(item.id, item.value);
        });
        container.classList.add("show-container");
    }
    
}

function createListItem (id , value){

    const element = document.createElement("article");
    element.classList.add("grocery-item");

    // creating attribute to article imporatant 
    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML= `<p class="title">${value}</p>
    <div class="btn-container">
      <!-- edit btn -->
      <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <!-- delete btn -->
      <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>`
    
    const deleteBtn = element.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteItem);
    const editBtn = element.querySelector(".edit-btn");
    editBtn.addEventListener("click", editItem);
    
    list.appendChild(element);
}

function displayAlert(text,action){
 
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    // perform after 1 sec 
    setTimeout(function(){
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);    
    },1000)

}
function setBackToDefault(){
    grocery.value="";
    editID="";
    editFlag=false;
    submitBtn.textContent="submit";
}