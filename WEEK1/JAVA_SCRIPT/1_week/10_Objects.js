
// OBJECTS 

var mydog = {
 
    "name" : "chimtu",
    "legs" : 4 ,
    "tails" : 1 ,
    // ARRAY 
    "friends" : ["everything!"]

};

// ACCESING OBJECTS : USING . NOTATION 

var name1 = mydog.name;
var legs = mydog.legs;

console.log("accesing obj using . notation ");
console.log(name1 + " " + legs);

// ACCESING OBJECTS : USING [] NOTATION 

var name2 = mydog["name"];
var legs2 = mydog["legs"];

console.log("accesing obj using [] notation ");
console.log(name1 + " " + legs);

// DEFINING OBJ 

var testObj1 = {
   // we can also have obj property 
   // like this and their values     
    12 : "rishi",
    13 : "varma",
    15 : "alluri"
};

var playerNumber = 13 ;
var player  = testObj1[playerNumber];
console.log(player);

// UPDATE OBJ PROPERTIES : 

testObj1[12] = "rishi vr";
console.log(testObj1[12]);

// ADDING NEW PROP TO OBJ 
  
testObj1.play="cricket";
mydog["color"]="white";
console.log("On adding new obj to testobj1 and mydog")
console.log(testObj1);
console.log(mydog);

// DELETING AN PROPERTY 

delete mydog.tails;
delete testObj1[15];
console.log("On DELETING ONE PROP testobj1 and mydog")
console.log(testObj1);
console.log(mydog);


