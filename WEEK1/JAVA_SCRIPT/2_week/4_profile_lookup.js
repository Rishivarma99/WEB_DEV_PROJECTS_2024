
// ARRAY 
var collection = [
    // OBJECTS 
    {
        "fisrtName": "Rishi",
        "lastName": "varma",
        "number": "989798",
        "lokes": [  // ARRAY 
            "pawan", "kalyan"
        ]
    },
    {
        "fisrtName": "Pardu",
        "lastName": "Bandla",
        "number": "9897999",
        "lokes": [
            "mahesh", "babu"
        ]
    }


];

// A FUNCTION THAT TAKES NAME OF PERSON 
// AND PROP AND SHOULD GIVE THE PROP VALUE 

function profileLookup(name, prop) {

    for (var i = 0; i < collection.length; i++) {
        // AS IT IS ARRRAY WE FIRST NEED TO SEARCH FOR THE 
        // ARRAY INDEX THAT MATCHES FIRST NAMES

        if (collection[i]["fisrtName"] == name) {
            // var obj = collection[i];
            // return obj[prop];
            //      or 
            return collection[i][prop] || "no such property";
        }
    }
    // not found name 
    return "not found NAME";


}

console.log(profileLookup("Rishi", "number"));

console.log(profileLookup("Pardhu11", "number")); //not found \
console.log(profileLookup("Pardu", "number11")); //NO SUCH  PROPERTY 






