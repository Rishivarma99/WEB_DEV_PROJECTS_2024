// FUNTIONS : 
// -> RESUABLE CODE AND NO NEED TO DECLARE THE TYPE IN FUNCTION ARGUMENTS OR PARAMETERS 

function reusableCode(){
    console.log("this is resued");
}

reusableCode();
reusableCode();

// FUNCTIONS WITH ARGUMETNS 

function funcWithArg(a,b){
    console.log(a-b);
}

funcWithArg(4,2);

// FUNC VARIABLE DECLARATION 

   //GLABAL VARIABLES 
   var global1 = 10 ;    

function func1(){
 
//    var global2 = 5; // Used only within function 
    global2 = 5;  // Becomes a global variable 
}
function func2(){
  
    var output ="";
    if( global1!="undefined"){
        output+="global1 : "+ global1+"\n";
    }
    if(global2 != "undefined"){
        output+="global2 : "+ global2;

    }
    console.log(output);
}

func1();
func2();

// GLOBAL VS LOCAL VARAIBLE IN  FUNTION -> LOCAL IS GIVE PRIORITY

var global3 = "T-shirts";

function checkScope1(){
    // more priorit 
    var global3 = "Sweters";
    return global3;
}

console.log(checkScope1());
console.log(global3);

console.log("************");
// IMP TO CHECK 

function abTest(a,b){
   
    if(a<0 || b<0){
        return undefined ;
    }
    

    return Math.round(Math.pow(Math.sqrt(a)+Math.sqrt(b),2));

}

console.log(abTest(-4,4)); //undefined 
