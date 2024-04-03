
// guessing word 

const word1 = ["apple" , "orange" , "grapes" , "banana"];

// Select a random number using index 

var randomIndex = Math.floor(Math.random() * word1.length);

var randomWord = word1[randomIndex];
console.log(word1[randomIndex]);

while(true){
    
    console.log(` the possible words are : ${word1}`);
    var userWord = prompt("Enter the word:");
    
    if(userWord=="exit"){
        break;
    }
    if(userWord== randomWord){
        alert(`WOW ${userWord} is CORRECT`);
        break;
    }
    else{
        alert(` ${userWord} IS WRONG TRY AGAIN !`);
    }
}