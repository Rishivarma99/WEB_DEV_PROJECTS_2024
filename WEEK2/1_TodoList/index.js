
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
] ;

// DISPLAY TASKS ACCORDING TO ARRAY AND ADD EVENT LISTNER TO EACH LIST BUTTON  
function displayTasks(){
    taskList.innerHTML = "";
    for(const task of tasks){
        let li = document.createElement("li");
        li.innerHTML= `
         <span> ${task.description} - ${task.completed ? "Completed" : "Pending"}  </span> 
            <button data-action="delete" class="deletebtn">Delete</button>
             <button data-action="edit" class="editbtn">Edit</button> 
             <button data-action="done" class="donebtn">Done</button>
        ` ;
    //   ADDING EVENTLISTNERS TO EACH LIST BUTTONS EFFICIENTLY USING DATA-ACTION ATTRIBUTE    
            li.querySelectorAll('button').forEach(button => {
                button.addEventListener('click', () => {
                    const action = button.dataset.action;
              switch (action) {
                case 'delete':
                    deleteTask(task);
                    break;
                    case 'edit':
                    editTask(task);
                  break;
                  case 'done':
                      toggleTaskCompleted(task);
                      break;
                    }
                });
            });
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
    console.log(tasks);
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

