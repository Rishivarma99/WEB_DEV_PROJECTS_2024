
// INSTEAD OF SWITCH WE CAN USE OBJECTS 

function getNames(val){

 var result = "";

 var lookup = {
    "alpha" : "Adams",
    "bravo" : "Boston",
    "charlie" : "chicago"
 }

 result = lookup[val];
 return result ;

}

console.log(getNames("alpha"));

// TO CHECK A PROPERTY IS PRESENT IN OBJECT 
  // hasOwnProperty()

  var obj1 = {
    "name" : "rishi",
    "age" : 20 ,
    "color" : "black"
  }

function checkProp(objName,propertyName){
   
    if(objName.hasOwnProperty(propertyName)){
        return objName[propertyName];
    }
    else{
        return "NOT FOUND" ;
    }
     
} 
console.log(checkProp(obj1,"color"));
  
// console.log(checkProp(obj1,"colo")); NOT FOUND 

// COMPLEX OBJECTS  

var superheroes = [
    {
        "name1" : "Deva",
        "age" : 30 ,
        "power" : "guns",
        // HERE FUNCTION IS AN ARRAY 
        "friends" : [
            "varada",
            "raju"
        ]
    }
    // , IMP 
    ,
    {
        "name1" : "rocky",
        "age" : 25,
        "power" : "sword",
        "friends" : [
            "chotu",
            "motu"
        ]
    }
];

// 

console.log(superheroes[0].friends);

// NESTED OBJECTS

var myStorage = {
     
    "car" : {
        "inside" : {
            "glove box" : "maps" ,
            "passenger seat" : "crumbs"
        },
        "outside" : {
            "trunk" : "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);
