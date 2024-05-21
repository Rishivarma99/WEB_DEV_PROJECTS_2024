
// IMPORTANT POINTS : 
// TO ADD BUTTON EVENT LISTNER WE USE ATTRIBUTE (DATA-ACTION) AND SWITCH CASE 
// USED DATE FUNCTION TO GET THE PRESENT DATE 
// WE CAN MANUPULATE PLACE HOLDER USING PSUEDO ELEMENT ::placeholder

// USE ARROW FUNCTION WE NEED TO WRITE A FUNCTION INSIDE IT
// USED INDEXOF ARRAY METHOD TO FIND THE INDEX IN TASKS ARRAY TO DELETE A GIVEN TASK 
// WE SHOULD ADD EVENT LISTNER TO EXECUTE THEM 

const addBtn = document.getElementById("add-btn"); // button 
const taskList = document.getElementById("task-list"); // ul
const presentDateTag = document.getElementById("Present-date");
const presentdate = new Date();

const tasks = [
    {
        description: "HW1",
        completed: false
    }
];
// UPDATING PRESENT DATE : 
const day = presentdate.getDate();
const month = presentdate.getMonth() + 1;
const year = presentdate.getFullYear();
presentDateTag.textContent = `${day} - ${month} - ${year} `;

// DISPLAY TASKS ACCORDING TO ARRAY AND ADD EVENT LISTNER TO EACH LIST BUTTON  
function displayTasks() {
    taskList.innerHTML = "";
    for (const task of tasks) {
        let li = document.createElement("li");
        li.innerHTML = `
        <div class="task-div">
        <span class="description">${task.description}</span>
        <span class="status">${task.completed ? "completed" : "pending"}</span> 
    </div>
    <div class="btn-div">
        <button action="delete" class="deletebtn ">delete</button>
        <button action="edit" class="editbtn">Edit</button> 
        <button action="done" class="donebtn">Done</button>
    </div>
        ` ;


        // // ⭐  ADDING EVENTLISTNERS TO EACH LIST BUTTONS EFFICIENTLY USING DATA-ACTION ATTRIBUTE    
        // taskList.querySelectorAll('button').forEach(button1 => {
        //     console.log("hi");
        //     button1.addEventListener('click', () => {
        //         const action = button1.dataset.action;
        //         switch (action) {
        //             case 'delete':
        //                 deleteTask(task);
        //                 break;
        //             case 'edit':
        //                 editTask(task);
        //                 break;
        //             case 'done':
        //                 toggleTaskCompleted(task);
        //                 break;
        //         }
        //     });
        // });
        // taskList.appendChild(li);

        const deleteBtn = li.querySelector(".deletebtn");
        const editBtn = li.querySelector(".editbtn");
        const doneBtn = li.querySelector(".donebtn");

        // Add event listeners to cached buttons
        deleteBtn.addEventListener("click", () => deleteTask(task));
        editBtn.addEventListener("click", () => editTask(task));
        doneBtn.addEventListener("click", () => toggleTaskCompleted(task));

        taskList.appendChild(li);
    }
}

// function to create a task which is an object 
function createTask(description, completed = false) {
    return { // we will raturn an object 
        description: description,
        completed: completed
    };
}

// on clecking the button add we need to add a task to task list 
addBtn.addEventListener("click", function () {
    const newTaskDescription = document.getElementById("new-task").value;
    const newTask = createTask("-👉" + newTaskDescription);
    tasks.push(newTask);
    console.log(tasks);
    displayTasks();
    // AFTER TASK IS ADDED WE NEED TO CLEAR THE NEW TASK BOX 
    document.getElementById("new-task").value = "";
});

function toggleTaskCompleted(task) {
    task.completed = !task.completed; //add oposite to completed 
    displayTasks();
}

function editTask(task) {
    console.log("hi");
    const newDescription = prompt("ENTER THE NEW DESCRIPTION");
    if (newDescription) { // if newDec is having a value 
        task.description = newDescription;
        displayTasks();
    }
}
// DELETE FUNCTION 
function deleteTask(task) {
    const index = tasks.indexOf(task);
    if (index != -1) { // if index found      
        tasks.splice(index, 1);
        displayTasks();
    }
}
// START  
displayTasks();

