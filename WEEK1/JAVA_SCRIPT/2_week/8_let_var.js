
let catName = "luca";
var dogName = "lucy";

// let catName = "nani";  // with let no 2 same names possible 
var dogName = "lucy2";
console.log(dogName);

// USING user strict in function 

function check1 (a,b){
    // "use strict"; // if applied undeclared variable dont work 
    c=a+b;

    return c;
}
console.log(check1(1,1));

// SCOPE OF VAR AND LET 

function varScope(){
    // var i ="function scope";
    let i ="function scope";

    if(true){
        // var i = "block scope"; //perminently becomes block scope dont change after block end 
        let i = "block scope";

        console.log("block scope of i : " + i);
    }
    console.log("function scope of i : " + i);

}

varScope();

// CONST KEYWORD 

function constCheck (str){
    
    const sentence = str + " is cool";

    // sentence = str + " is amazing " // cant redeclare 

}

constCheck("hi");