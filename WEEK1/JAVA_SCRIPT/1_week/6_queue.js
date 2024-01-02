// construct a queue that adds element in the last 
// and remove element form the front 

function nextInLine(arr,item){

    arr.push(item);

    // SHIFT: used to remove an item in the front 
    return arr.shift();

}

var arr = [1,2,3,4,5];

// JSON.stringify(<obj>): convert to strngs good for printing 

console.log("Array before : " + JSON.stringify(arr) );

console.log(nextInLine(arr,6));
console.log("ARRAY after : " +  JSON.stringify(arr));
