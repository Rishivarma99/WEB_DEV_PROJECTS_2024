

class Student{
  id; 
  name ; 
  age ; 
   constructor(id,name,year,age,weigth){
     this.id = id ; 
     this.name = name;
     this.year= year;
     this.age = age ;
     this.weigth = weigth; 
   }
    getInfo(){ 
           console.log(`Id : ${this.id} , Name : ${this.name} , age : ${this.age}`);
   }
  //  IN CLASS CAN APPLY STATIC FILTER WHICH APPLY TO CLASS DIRECTLY NOT TO OBJECTS 
  static filterByAge(employeeArr,minimum_age){
    return  employeeArr.filter( (emp) => emp.age >= minimum_age );
  }

}

let st1 = new Student(101,"Rishi","3rd",20,40);
let st2 = new Student(102,"Balaji" , "4rt" , 22,60);


// CREATING AN ARRAY THAT STORE THE OBJECTS CREATED FROM CLASSES 
const employee = [st1,st2]; 
// WE NEED TO DO LIKE THIS USING FOR EACH THEN CALL GETINFO FOR EACH OBJECT 


function menu () {
   
  var key = parseInt(prompt("1.add \n 2.filterByage"));
  
  switch (key) {
    case 1 : 
    addEmployee();
    break ;

    case 2  : 
    const age = parseInt(prompt("Enter minimum age : "));
    filterByAgeFunction(employee,age);
    break ; 

    default:
      console.log("bye");
  }

}


function printInfo(employeeArr){
  employeeArr.forEach((emp) => emp.getInfo());
}

printInfo(employee);

function filterByAgeFunction(employeeArr,age){
  // const FilteredEmployee =  Student.filterByAge(employeeArr,age);
  const FilteredEmployee = employeeArr.filter( emp => emp.age > age);
   
  console.log(`\n The filtered Array is : `);
  printInfo(FilteredEmployee);
}


function addEmployee(){
    
  const employeeDetails = prompt("Enter details:(id,name,year):");
  const eV = employeeDetails.split(",")
  // Adding new student : 
  let newStudent = new Student(parseInt(eV[0]),eV[1],"2nd",parseInt(eV[2]),60);
  employee.push(newStudent);
  console.log(`ADDED SUCCESSFULLY WITH ID:${newStudent.id}`);
  printInfo(employee);
}

function deleteEmployee(){
  // JUST NEED TO DELETE THE EMPLOYEE WITH ID NUMBER IN THE ARRAYA EMPLOYEE 
  
  printInfo(employee);
  const Delete_id = parseInt(prompt("Enter the id you want to delete:"));
 
  const idx = employee.findIndex( function(emp){
    if(emp.id == Delete_id){
      console.log(emp.id);
      return true ; 
    }
  });
  
  if(idx!=-1){
  
    employee.splice(idx,1);
    console.log(`ID number ${Delete_id} is deleted `);
    
  }
  else{
      console.log(` Id number ${Delete_id} Not found`);
  }
  
  printInfo(employee);
}

menu();



