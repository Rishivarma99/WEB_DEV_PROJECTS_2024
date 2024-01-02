
var str1 = "Hi my name is ";
var name1= "Rishi";

str1 +=  name1 ;

// console.log(str1);

// To find length 

var n = str1.length;
// console.log(n);

console.log(str1[2]);

// WORDBLANKS NAMES GAME 

function wordBlanks(noun,adj,verb,adverb){
    
    // task : to concat all the words 

    var result ="";
    result += "the " + adj +" "+ noun +" "+  verb + " to the store " + adverb 
    return result;
}  


console.log(wordBlanks("dog","big","ran","quickly"));
