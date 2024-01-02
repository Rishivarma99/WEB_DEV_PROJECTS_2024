
// NESTED ARRAYS IN OBJECTS 

var myPlants =
// array of obj 
[
    { // obj-1
      type : "flowers",
      "list" : [ // array 
        "rose",
        "tulip",

      ] 
     },
    //  obj-2
    {
           type : "trees",
           "list" : [
            "fir",
            "pine"
           ]
    }
];

// ACCESING NESTED ARRAYS -> using index and . notation 


var roseFlower = myPlants[0]["list"][0];
console.log(roseFlower)