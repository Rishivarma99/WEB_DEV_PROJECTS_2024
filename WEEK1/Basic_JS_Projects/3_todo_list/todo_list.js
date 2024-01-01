

function start() {

    while (true) {
        // if(todolist.length!=0){
        //     console.log("");
        //     showList();
        // }

        var key = parseInt(prompt(" 1.To show list \n 2.To add task \n 3.Delete a task \n 4.Update status \n 5.Clear \n 6.FilterbyStatus \n 7.assignReview \n 8.END"));

        switch (key) {
            case 1:
                showList();
                break;

            case 2:
                addList();
                break;

            case 3: 
                deleteList();
                break;

            case 4:
            updateStatus();
            break;

            case 5:
            todolist.length = 0; // clears the array 
            console.log("");
            console.log("🚩LIST IS CLEARED")
            break;

            case 6 :
                var filterStatus = prompt("Enter the status to show:");
                showFiltered(filterStatus);
                 break;
             
            case 7:
                assignTolist();
                break;     
            case 8:
            console.log("END")
            return; //exit loop 

            default:
            console.log("Enter a valid choice");

        }
        //   console.log("END");
    }
}

function showList() {
    console.log("");
    console.log("TODO LIST :");
    for (let i = 0; i < todolist.length; i++) {
        console.log(`${i + 1}. ${todolist[i]["task"]} \t : ${todolist[i]["status"]}`);
    }
}
function showList_filtered(filteredArray){  // TO SHOW ANY FILTERED LIST ARG AS AN FILTERED ARRAY 
    console.log("");
    console.log("FILTERED TODO LIST :");
    for (let i = 0; i < filteredArray.length; i++) {
        console.log(`${i + 1}. ${filteredArray[i]["task"]} \t : ${filteredArray[i]["status"]} \t : ${filteredArray[i]["review"]}`);
    }
}


function list(){  // TO SHOW LIST WITHOUT TODO NOT IMPORTANT 
    for (let i = 0; i < todolist.length; i++) {
        console.log(`${i + 1}. ${todolist[i]["task"]} \t : ${todolist[i]["status"]}`);
    }
}


function showFiltered(filterStatus){  // WE USE FILTER FUNCTION HERE 
  
    const filteredArray = todolist.filter(tasks => tasks["status"]==filterStatus); //filter the array 
    showList_filtered(filteredArray); 
}

function addList() {
    const newTask = prompt("Enter your task : ");
    const newStatus = prompt("Enter your status : ");
    var obj1 = {
        task: newTask,
        status: newStatus,
    };
    todolist.push(obj1);
}
function updateStatus() {
    console.log("");
    console.log("👉Select Task to Update:");
    list();

    const taskNum_update = parseInt(prompt("Enter TaskNum : "));
    const updatestatus = prompt("Enter status : ");

    todolist[taskNum_update-1]["status"] = updatestatus;
    console.log("Status updated of task: " + taskNum_update);
   
}
function deleteList() {
    console.log("");
    console.log("👉Select Task to delete:");
    list();

    const taskNum_delete = parseInt(prompt("Enter TaskNum : "));
    
    todolist.splice(taskNum_delete-1, 1); // to delete at index
    console.log("Deleted task: " + taskNum_delete);
    

}

function assignTolist(){  // using map function 

   const mappedList = todolist.map( function (tasks1) { //using map to add a revie property to todolist
     if(tasks1["status"]== "done"){
        tasks1["review"] = "keepitup";
     }
     else if(tasks1["status"] == "pending"){
        tasks1["review"] = "workhard";
     }
     return tasks1;

     
    })
    showList_filtered(mappedList);
}


// PROGRAM START 
let todolist = [
    {
        task: "hw1",
        status : "done"
    },
    {
        task : "hw2",
        status: "done"
    }
];

start();