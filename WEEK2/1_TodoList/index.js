

// IMPORTANT POINTS : 
// USE ARROW FUNCTION WE NEED TO WRITE A FUNCTION INSIDE IT
// USED INDEXOF ARRAY METHOD TO FIND THE INDEX IN TASKS ARRAY TO DELETE A GIVEN TASK 
// WE SHOULD ADD EVENT LISTNER TO EXECUTE THEM 


const addBtn = document.getElementById("add-btn"); // button 
const taskList = document.getElementById("task-list"); // ul

const tasks = [
    {
        description : "HW1",
        completed: false
    }
] ; //array to store a task 

// var list1 = taskList.innerHTML();

// displaythe task that are in an array inside the ul 
function displayTasks(){
    taskList.innerHTML = ""; // clearing inside the ul 
    for(const task of tasks){
        const li = document.createElement("li");
        const span = document.createElement("span");

        li.appendChild(span);
        span.textContent = ` ${task.description} - ${task.completed ? "Completed" : "Pending"}`;
       
        // ADDING DELETE BUTTON TO LIST 
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.style.margin = "5px";
        
        li.appendChild(deleteButton);
        deleteButton.addEventListener("click" , function(){
            deleteTask(task);
        })
        
        // ADDING EDIT BUTTON 
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.style.margin = "5px";
        li.appendChild(editButton);

        editButton.addEventListener("click" , function(){
            editTask(task);
        })

        const doneButton = document.createElement("button");
        doneButton.textContent = "Done";
        doneButton.style.margin = "5px";
        li.appendChild(doneButton);

        doneButton.addEventListener("click" , function(){
            toggleTaskCompleted(task);
        })

        // here for evely list we are adding event listner 
        // li.addEventListener("click", () => toggleTaskCompleted(task));
        // li.addEventListener("dblclick" , ()=> editTask(task));
        
       taskList.appendChild(li);
    }
}



// function to create a task which is an object 
function createTask(description , completed = false){
    return { // we will raturn an object 
        description : description,
        completed : completed
    };
}


// on clecking the button add we need to add a task to task list 

addBtn.addEventListener("click" , function (){
    const newTaskDescription = document.getElementById("new-task").value; 

    const newTask = createTask ( newTaskDescription);
    tasks.push(newTask);
    displayTasks();
    // AFTER TASK IS ADDED WE NEED TO CLEAR THE NEW TASK BOX 
    document.getElementById("new-task").value="";
});

function toggleTaskCompleted(task){
 task.completed = !task.completed; //add oposite to completed 
 displayTasks();
}

function editTask(task){
    const newDescription = prompt("ENTER THE NEW DESCRIPTION");
    
    if(newDescription){ // if newDec is having a value 
        task.description = newDescription;
        displayTasks();
    }

}


// DELETE FUNCTION 
function deleteTask(task){
    const index = tasks.indexOf(task);
    if(index!= -1) { // if index found 
      
        tasks.splice(index,1);
        displayTasks();

    }
}


// START 

displayTasks();

