
// FIND and findIndex() METHOD USED TO FIND AND RETURN FIRST ELEMENT THAT MATCHES THE CONDITON 

// DONT CHANGE ORI ARRYA 

var arr1 = [1,2,3,4,5];

// FIND 4  Find FUNCTION RETURN UNDEFINED IT THE LEMENT NOT FOUND

console.log(arr1.find( function (element) {  // RETURNS 4
  
    if(element == 4){    //THE CALLBACK FUNCTION MUST RETURN TRUE OR FALSE 
        return true ; 
    }

}))  // THEN THE FIND FUNCTION RETURN THE ELEMENT (NOT INDEX) 

// TO GET INDEX POSITION USE findIndex() IF NOT FOUND RETURN -1
console.log(arr1.findIndex( function (element) {  // RETURNS 3(index)
  
    if(element == 4){    
        return true ; 
    }

})) 
