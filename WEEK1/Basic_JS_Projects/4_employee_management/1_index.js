// EMPLOYEE MANAGEMNT APP SIMPLE CLI APP THAT STORE EMPLOYEE INFORMATION 

// -> add employee,delete employee , 
// ARRAY FUNCTIONS USED : filter,split,splice,sort,reduce,map 


const employees=[
 
     {
          
            id : 100,
            name : "ALLURI RISHI VAMRA",
            role : "SOFTWARE ENGINEER",
            salary : 100000,
            "experiance(yrs)" : 2 ,  
            contact : 9901,
            gender : "M",
            changeContact(newNum){
              this.contact=newNum;
            } 
            
    },

     {
        id : 101,
        name : "ANUKULA MOHAN CHANDRA",
        role : "NETWORK SPECILIST" , 
        salary : 200000,
        "experiance(yrs)" : 3,  
        contact : 9902,
        gender : "M",
        changeContact(newNum){
            this.contact=newNum;
          } 
        
    }  ,
    {
        id : 102,
        name : "HARI HARAN",
        role : "WEB DEVELOPER" , 
        salary : 100000,
        "experiance(yrs)" : 1,  
        contact : 9903,
        gender : "M",
        changeContact(newNum){
            this.contact=newNum;
          } 
        
    },


];
// console.log(employees);

// ADDING EMPLOYEE  using split 

function addEmployee(){
    
    const employeeDetails = prompt("Enter details:(id,name,role,salary,experiance,contact):");
    const employeeValues = employeeDetails.split(",")  // IMPORTANT ⭐
    
    const employee = {
        id : parseInt(employeeValues[0]),
        name : employeeValues[1],
        role : employeeValues[2] , 
        salary : parseInt(employeeValues[3]),
        "experiance(yrs)" : parseFloat(employeeValues[4]),  
        contact : parseInt(employeeValues[5]), 
        changeContact(newNum){
            this.contact=newNum;
          } ,
          gender : undefined
    }
   
    employees.push(employee);
    console.log(`ADDED SUCCESSFULLY WITH ID:${employee.id}`);
}

function showList(list){  //USED FOREACH 
 console.log("");

 list.forEach( function (emp) {
    return console.log(` ${emp.id} : ${emp.name}-salary:${emp.salary}-exp:${emp["experiance(yrs)"]}-number:${emp.contact} - ${emp.gender}`);
 })
}

function deleteEmployee(){ //SPLICE 
    
    console.log("SELECT ID TO DELETE");
    showList(employees);
    var id =parseInt(prompt("ENTER ID:"));

  var i=0;
    while(employees[i]["id"] != id && i<employees.length){
       i++;
    }
    employees.splice(i,1);
    console.log("DELETED");
        
}

function filteredList(){
 
    var key2 = prompt("1.SALARY \n 2.EXPERIANCE");

    if(key2 == 1){
        var minSalary = parseInt(prompt("Enter the min salary:"));
        
        const filteredArray = employees.filter( emp => emp.salary>=minSalary); //FILTER FUNCTION IS USED 
        showList(filteredArray);


    }
    else if(key2 == 2){
        var minExperiance = parseInt(prompt("Enter the min experiance:"));
        
        const filteredArray = employees.filter( emp => emp["experiance(yrs)"]>=minExperiance); 
        showList(filteredArray);


    }
}

function takeIdGetIndex(id){
    
    var i=0;
    while(employees[i]["id"] != id && i<employees.length){
       i++;
    }
    return i;
}

function changeContact2(){
    console.log("SELECT ID");
    showList(employees);
    let details = prompt("Enter the id and new number as (id,newnum)");
    let detailArray = details.split(",");
    let id = parseInt(detailArray[0]);
    let newNum = parseInt(detailArray[1]);

    let index = takeIdGetIndex(id);
    employees[index].changeContact(newNum);
}

function clearList(){
    
   employees.splice(0,employees.length);
    console.log("cleared");

}
function sortBySalary(){  // SORT FUNCTION ADDED 
   
  var order = prompt("SELECT (a).ACCENDING \n (b).DECCENDIN OREDER");

  const employees_copy = [... employees]; // creates a deep copy SPREAD OPERATOR 
  
  employees_copy.sort( function (a,b){
    if(order == "b") {  // decending order 
       [a,b] = [b,a];   // REVERSE THE ARRAY 
  }

  return a.salary - b.salary;  // TO GIVE ACCORDING ORDER SORT FUNCTION 
})

 console.log("THE SORTED LIST IS:");
 showList(employees_copy);

}

// REDIUCE FUNCTION 
function sumProperty(){  // GET SUM USING REDUCE 

    var property = prompt("ENTER THE PROPERTY TO SUM:(salary,experiance(yrs),people))");
    
    var acc1 = employees.reduce( function(acc ,num){
        if(property== "people"){
            acc = acc + 1 ;
            return acc;

        }
        acc=acc + num[property];
        return acc ;
    } ,0)

    alert("THE SUM IS :" + acc1);

}

function addMr(){  //ADD MR IN FRONT OF NAME USING MAP 

    let emp1 = employees.map( function(emp) {
      let name = emp.name;
      
      emp.name = "MR." + name ;
      
      return emp ; 
    })
   showList(emp1);
    // employees = emp1 ;
   console.log("ADDED MR");
}

function findEmp ()
{
 
    let  property =  prompt("CHOOSE PROPERTY TO GET NAME: \n 1.SALARY \n 2.EXPERIANCE(YRS)- (1-5-range)").toLowerCase();
    let range = prompt("CHOOSE RANGE : \n 1.HIGHEST \n 2.LOWEST").toLowerCase();
     
    let emp = employees.find( function (emp)
    {
        if(range === "1"){

            if(property === "1"){
                
                return emp["salary"] >400000 ;
            }
            else if(property === "2"){
                return emp["experiance(yrs)"] > 4 ;
            }
        }
        else if(range === "2")
        {
            if(property === "1"){
                
                return emp["salary"] < 200000 ;
            }
            else if(property === "2"){
                return emp["experiance(yrs)"] < 2  ;
            }
        }

    });

    if (emp) {  // if emp is true 
        console.log("");
        console.log(` EMP: ${emp.id} : ${emp.name}-salary:${emp.salary}-exp:${emp["experiance(yrs)"]}-number:${emp.contact} - ${emp.gender}`);

    } else {
        console.log("No employee found with the specified criteria.");
    }

}




function checkMinExperiance(){  // EVERY RETURS TRUE OR FALSLE 
   let minExp = parseInt(prompt("ENTER MINIMUM EXPERIANCE TO CHECK ALL EMPLOYEES"));
    
   let result = employees.every( emp => emp["experiance(yrs)"]>= minExp);
   
   if(result){
    console.log("YES ALL ARE ABOVE " + minExp + " years experianced");
     filteredList();
   }
   else{
    console.log("NO SUCH PRESENT");
   }

}

function checkMinSalary(){
    let minSalary = parseInt(prompt("ENTER MINIMUM SALARY TO CHECK FOR ATLEAST ONE EMP"));
    
    let result = employees.some(emp => emp.salary>=minSalary);
    
    if(result){

        console.log("yes atleast 1 present with minsalry: " + minSalary);
    }
    else{
        console.log("no one present eith salaray more than: " + minSalary);
        
    }
}

function searchPerson(){
   
    let personName = prompt("ENTER NAME OF PERSON TO CHECK:");
//    USING MAP WE GOT EVERY PERSON NAME AND THEN USE INCLUDE TO CHECK 
    let result = employees.map( emp => emp.name).includes(personName);

    if(result){ // person present 
   console.log("YES PERSON PRESENT");
    }
    else {
        console.log("PERSON NAMED " + personName + " NOT PRESENT");
    }

}

function getNumByName(){
   
    let personName = prompt("ENTER NAME OF PERSON TO GET HIS NUMBER:");

    let result = employees.map( emp => emp.name).indexOf(personName); // WE GET THE INDEX OF THAT OBJECT 

    if(result>-1){ // person present 
   console.log("YES PERSON PRESENT NUMBER IS " + employees[result]["contact"]); //CONTACT NEED TO KEEP IN ["<>"] WHY?
    }
    else {
        console.log("PERSON NAMED " + personName + " NOT PRESENT");
    }

}

function getAllNames (){  //JOIN OPERATION 
 
    let namesString = employees.map(emp => emp.name).join(" ,"); //USING JOIN OPERATION TO JOIN array elemtns IN A single string  
  
    console.log("NAMES:" + namesString);
}

function start(){

    while(true){
        
        var key = parseInt(prompt("1.TO SHOW LIST \n 2.TO ADD EMPLOYEE \n 3.TO DELETE EMPLOYEE \n 4.FILTER \n 5.CHANGE CONTACT \n 6.CLEAR LIST \n 7.SORT SALARY \n 8.SUM PROPERTY \n 9.ADD MR \n 10.FIND EMP \n 11.CHECK MIN EXPERIANCE \n 12.CHECK MIN SALARY \n 13.SEARCH PERSON \n 14.GET NUM BY NAME \n  15.GET ALL NAMES \n 16.END"));
        
    switch (key) {
        case 1 :
        showList(employees);
        break;

        case 2 : 
        addEmployee();
        break;
        
        case 3 : 
        deleteEmployee();
        break;
        
        case 4 : 
        filteredList();
        break;
        
        case 5 :
          changeContact2();
            break;
       
        case 6 :
           // array name as string 
            clearList();
            break;
            
         case 7 : 
         sortBySalary();
         break;
         
         case 8 : 
         sumProperty();
         break;

         case 9 : 
         addMr();
         break;
         
         case 10 :
            findEmp();
            break;

          case 11 : 
          checkMinExperiance();
          break;
          
          case 12 : 
          checkMinSalary();
          break;
          
          case 13:
            searchPerson();
            break;
          
            case 14:
                getNumByName();
                break;

             case 15 :
                getAllNames();
                break;   
        case 16 :
        return;
    }
}
}


start();
