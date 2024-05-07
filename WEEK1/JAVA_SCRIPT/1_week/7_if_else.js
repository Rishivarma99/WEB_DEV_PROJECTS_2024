

function checkEqual(value1,value2){
 
    if(value1==value2){
        return "yes they are equal";
    }
    return "not equal ";
}

function checkStrictEqual(value1,value2){
  
    // === : Strict equal 
    if(value1 === value2){
        return "yes they are strict equal";
    }
    return "not strict equal ";


}
function checkStrictInEqual(value1,value2){
  
    // === : Strict equal 
    if(value1 !== value2){
        return "not strict equal ";
    }
    return "yes they are strict equal";


}


// CHECKING == AND === And !== TO OPERATOR 
var a = 3 ;
var b = "3";

console.log(checkEqual(a,b));

console.log(checkStrictEqual(a,3));

console.log(checkStrictInEqual(10,11));

// EASY WAY TO RETURN BOOLEAN VALUES 

function Ṇcheck1(a,b){
    // return true if b is greter 
    // than a and otherwise false
    return a<b ;

}
