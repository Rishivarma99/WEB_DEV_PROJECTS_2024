
// SMALL PROJECT RECORD COLLECTION 
//  -> NEED TO UPDATE A nested OBJECT 

var collection = { //object 

    "2548" //CALLED IDS  
    : {
        "album" : "Slippery when Wet",
        "artist" : "Bon Jovi",
        "tracks" : [
            "let it rock",
            "you give love a bad name"
        ]
    },
    // object inside object 
    "2468" : {
        "album": "1999",
        "artist" : "prince",
        "tracks":[
            "1999",
            "little red corvette"
        ]
    }

}

// WE NEED TO STORE INTIAL OBJECT 

var collectionCopy =JSON.parse( JSON.stringify(collection)); //CREATE DEEP COPY 

// var collectionCopy= collection; //BAD PRACTICER CREATES SHALLOW CPY


// collection[2468]["album"]="rusi";
// console.log(collection);

function change1(id,prop,value){
// IN this func take care of empty value && array manipulate && rest all property 
    
    // if values is empty means to delete that property 
    if(value === ""){
        delete collection[id][prop];
    }
    // IF prop is array 
    else if(prop === "tracks"){
        // here value is present then only comes to else if 
        
        // TO CREATE AN EMPTY ARRAY 
        collection[id][prop]=collection[id][prop] || [] // if tracks not present add a mew track if present cpy same 
        collection[id][prop].push(value); //pushingn into track
        
    }
    // TO ADD SIMPLE ATTRIBUTES 
    else{
    collection[id][prop]=value;

    }
   return collection ;     
}


console.log(change1(2548,"album","rishi"));
// console.log(collection);
