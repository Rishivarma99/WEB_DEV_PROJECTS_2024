

class Student{
   
  name ; 
  age ; 
   constructor(name,year,age,weigth){
     this.name = name;
     this.year= year;
     this.age = age ;
     this.weigth = weigth; 
   }
   

  
    getInfo(){ 
           console.log(`Name : ${this.name} , age : ${this.age}`);
   }
  //  IN CLASS CAN APPLY STATIC FILTER WHICH APPLY TO CLASS DIRECTLY NOT TO OBJECTS 
  static filterByAge(employeeArr,minimum_age){
    return  employeeArr.filter( (emp) => emp.age >= minimum_age );
  }

}

let st1 = new Student("Rishi","3rd",21,40);
let st2 = new Student("Balaji" , "4rt" , 22,60);


const employee = [st1,st2];
// WE NEED TO DO LIKE THIS USING FOR EACH THEN CALL GETINFO FOR EACH OBJECT 

function printInfo(employeeArr){
  employeeArr.forEach((emp) => emp.getInfo());
}

printInfo(employee);

function filterByAgeFunction(employeeArr,age){
  const FilteredEmployee =  Student.filterByAge(employeeArr,age);
   
  console.log(`\n The filtered Array is : `);
  printInfo(FilteredEmployee);
}
filterByAgeFunction(employee,22);


function addEmployee(){
    
  const employeeDetails = prompt("Enter details:(id,name,year):");
  const eV = employeeDetails.split(",")

  
  let newStudent = new Student(eV[1],"2nd",parseInt(eV[2]),60);
  // const employee = {
  //     id : parseInt(employeeValues[0]),
  //     name : employeeValues[1],
  //     role : employeeValues[2] , 
  //     salary : parseInt(employeeValues[3]),
  //     "experiance(yrs)" : parseFloat(employeeValues[4]),  
  //     contact : parseInt(employeeValues[5]), 
  //     changeContact(newNum){
  //         this.contact=newNum;
  //       } ,
  //       gender : undefined
  // }
  employee.push(newStudent);
  console.log(`ADDED SUCCESSFULLY WITH ID:${employee.id}`);
  printInfo(employee);
}

addEmployee();
addEmployee();


