

// EMP MANAGEMENT APP 
// -> IMPORTANT METHODS USED : 
//        1.Object.entries(<obj_name>)->(used to get both obj prop 
//          and value using for loop)

// IMPORTANT FUNCTION : 
// SHOWLIST2 : USED TO SHOW THE LIST DYNAMICALLY USING THE ARRAY OF OBJECTS 
                // IN THIS I USED FOR LOOP 

const employees = [

  {

    ID: 100,
    NAME: "ALLURI RISHI VAMRA",
    ROLE: "SOFTWARE ENGINEER",
    SALARY: 100000,
    "EXPERIANCE(yrs)": 2,
    CONTACT: 9901,
    GENDER: "M",
    changeContact(newNum) {
      this.contact = newNum;
    }

  },

  {
    ID: 101,
    NAME: "ANUKULA MOHAN CHANDRA",
    ROLE: "NETWORK SPECILIST",
    SALARY: 500000,
    "EXPERIANCE(yrs)": 3,
    CONTACT: 9902,
    GENDER: "M",
    changeContact(newNum) {
      this.contact = newNum;
    }

  },
  {
    ID: 102,
    NAME: "HARI HARAN",
    ROLE: "WEB DEVELOPER",
    SALARY: 100000,
    "EXPERIANCE(yrs)": 1,
    CONTACT: 9903,
    GENDER: "M",
    changeContact(newNum) {
      this.contact = newNum;
    }

  },
  {
    ID: 103,
    NAME: "BEVERA BALAJI",
    ROLE: "DATA ANYLYST",
    SALARY: 300000,
    "EXPERIANCE(yrs)": 4,
    CONTACT: 9905,
    GENDER: "M",
    changeContact(newNum) {
      this.contact = newNum;
    }

  },
  {
    ID: 104,
    NAME: "NITHIN",
    ROLE: "DATA SCINTEST",
    SALARY: 300000,
    "EXPERIANCE(yrs)": 7,
    CONTACT: 9908,
    GENDER: "M",
    changeContact(newNum) {
      this.contact = newNum;
    }

  },


];

const employeeList = document.getElementById("employeelistdiv");
employeeList.classList.add("main"); //CLASS MAIN ADDED 

const propertyNames = Object.keys(employees[0]);

console.log(propertyNames[0]);

const addbtn = document.getElementById("add-btn");
const deletebtn = document.getElementById("delete-btn");

// FILTERING 
const fiterBtn = document.getElementById("filter-btn");
const whatToFilter = document.getElementById("filterSelection");
const result = document.getElementById("resultToShow");

// RESET BUTTON 
const resetBtn = document.getElementById("reset-btn");

function addEmployee() {

  const employeeDetails = prompt("Enter details:(id,name,gender,role,salary,experiance,contact):");

  if(!employeeDetails){
    alert("ENTER THE DETAILS PROPERLY");
  }
  else{

    
    const employeeValues = employeeDetails.split(",")  // IMPORTANT ⭐ SPLICE METHOD 
    
    let employee = {  // object created 
      ID: parseInt(employeeValues[0]),
      NAME: employeeValues[1],
      GENDER : employeeValues[2],
      ROLE: employeeValues[3],
      SALARY : parseInt(employeeValues[4]),
      "EXPERIANCE(yrs)" : parseFloat(employeeValues[5]),  
      CONTACT : parseInt(employeeValues[6]), 
      changeContact(newNum){
        this.contact=newNum;
      } 
    }
    employees.push(employee);
    
    showEmployeeList2(employees);
  }
  }
  
  
  function showEmployeeList2(employees){
    
    // CLEARING MAIN EMPLOYEE LIST BEFORE PRINT 
    employeeList.innerHTML="";
    employees.forEach( (emp) => 
    {
      // OBJECT 1 
    const employeeElement = document.createElement("div"); // consit of details of emp div
    employeeElement.classList.add("emp"); // CLASS EMP ADDED 
    
    for(const [propertyName , propertyValue] of Object.entries(emp))
    {
      if(propertyName == "changeContact"){
        continue;
      }
      const para = document.createElement("p");
    para.classList.add("details");
    
    const span2 = document.createElement("span"); // default propery 
    span2.classList.add("propvalue");
    span2.textContent = propertyName + ":";
    para.appendChild(span2);


    const span = document.createElement("span");
    span.classList.add("uservalue");
    span.textContent = propertyValue;
    para.appendChild(span);

    employeeElement.appendChild(para);
   
    }
    employeeList.appendChild(employeeElement);



  })
}

// filtering function 

function filterExperiance(){
   
  const minExperince = prompt("ENTER MINIMU EXPERINCE TO FILTER");
 let employeesCopy = employees.filter((emp)=> emp["EXPERIANCE(yrs)"]>= minExperince );
  
 result.textContent = `Employees with MIN EXPERINCE OF ${minExperince} YEARS`;

 return employeesCopy;

}
function filterSalary(){
   
  const minSalary = prompt("ENTER MINIMUM SALARY TO FILTER");
 let employeesCopy = employees.filter((emp)=> emp.SALARY>= minSalary );
  
 result.textContent = `Employees with MIN SALARY OF ${minSalary} k`;

 return employeesCopy;

}
function filterGender(){
   
  const gender = prompt("ENTER GENDER TO FILTER").toUpperCase();
 let employeesCopy = employees.filter((emp)=> emp.GENDER== gender );
  
 result.textContent = gender=="M" ? "MALE EMPLOYEES" : "FEMALE EMPLOYEES" ;

 return employeesCopy;

}

fiterBtn.addEventListener("click" , () =>{
    
  const filterValue = whatToFilter.value;

  if(filterValue == "demo"){
    prompt("PLEASE SELECT ONE:");
  }
  else if(filterValue == "salary"){
    showEmployeeList2(filterSalary());
     
  }
  else if(filterValue == "experiance"){
    showEmployeeList2(filterExperiance());
     
  }
  else if(filterValue == "gender"){
    showEmployeeList2(filterGender());
     
  }

})
resetBtn.addEventListener("click" , (Event) => {
 showEmployeeList2(employees);
})

// DELTION OF EMPLOYEEE 
deletebtn.addEventListener("click" , function (){
 
  const deleteType = parseInt(prompt("DELETE BY \n 1.ID \n 2.NAME"));

  // if delelte by id 

  const deleteIndex = employees.indexOf()

})


// ADDING ADD EVENT LIST
addbtn.addEventListener("click", addEmployee);


showEmployeeList2(employees);


































// function deleteList (employee){
   
  // var index = employees.indexOf( (emp) => emp== employee);
  
  // employees.splice(index,1);
  
  // showEmployeeList2(employees);
  
  // }
  // function showEmployeeList(employees) {
  
  //   employees.forEach(emp => {
  //     const employeediv = document.createElement("div");
  //      employeediv.classList.add("emp"); // CLASS EMP ADDED 
  
  //     const idP = document.createElement("p");
  //     idP.classList.add("details"); // CLASS DETAILS ADDED TO PARA
  //     const idSpan = document.createElement("span");
  //     idP.textContent = propertyNames[0] + ":";
  //     idSpan.textContent = emp["id"];
  //     idP.appendChild(idSpan);
  
  //     employeediv.appendChild(idP);
  
  //     const nameP = document.createElement("p");
  //     nameP.classList.add("details");
  //     const nameSpan = document.createElement("span");
  //     nameSpan.textContent = emp["name"];
  //     nameP.textContent = propertyNames[1] + ":";
  //     nameP.appendChild(nameSpan);
  
  //     employeediv.appendChild(nameP);
  
  
  //     const roleP = document.createElement("p");
  //     roleP.classList.add("details");
  //     const roleSpan = document.createElement("span");
  //     roleP.textContent = propertyNames[2] + ":";
  //     roleSpan.textContent = emp["role"];
  //     roleP.appendChild(roleSpan);
  
  //     employeediv.appendChild(roleP);
   
  //     employeeList.appendChild(employeediv);
  //   });
  
  
  
  
  // }