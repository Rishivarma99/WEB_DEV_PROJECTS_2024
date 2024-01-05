
// INCLUDES() AND INDEXOF() FUNCTION ARE SIMILAR 
// TO CHECK IF A PARICULAR VALUE IS INCLUDED IN AN ARRYAY 


var arr1 = ["apple" , "banana" ,"1"];

console.log(arr1.includes("1"));
console.log(arr1.indexOf("1")); 

var arr2 = [
    {
        name : "rishi",
        age: 22
    },
    {
        name : "raghu",
        age: 24
    }
]

console.log( arr2.map(emp => emp.name).indexOf("raghu")); //WE ARE GEETING ITS INDEX IMP ************
