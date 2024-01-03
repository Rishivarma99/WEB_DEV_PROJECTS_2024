
// condition ? statement-if-true : statement-if-false;

function func1(a,b){

    return a<b ? "b greater" : "b smaller";
}

console.log(func1(1,2));
console.log(func1(2,1));

// MULTIPLE TERNARY : 

function multipleTernary(a,b)
{
   
    return a<b ? a>1 ? "a and b greater than 1":"a is less than 1"  : "a is greater than b";
}

console.log(multipleTernary(2,4)); // a and b grater than 1 