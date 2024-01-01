

// THE USER SELECT SHOUD GUESS THE WORD BY SELECTINFG ECAH LETTER
// IF THAT LETTER PRESENT IN RANDOM WORD THEN  THE WORD IS CINSTRUCTED OTHEREWISE IT IS REVOKED 

alert("hi");
// replace functions
function replaceAt(str, index, replacement) {
    return str.substring(0, index) + replacement + str.substring(index + 1);
  }

var words = ["apple" ,"mango","kiwi","banana","orange" ];



// generate random word 
var randomWord = words[Math.floor(Math.random() * words.length)];
console.log(randomWord);
var hiddenWord = randomWord.replace(/./g , "_");
console.log(hiddenWord); 
var usedLetter = [];  // whatever the valid guess we keep it in usedletter
// max no of guesses 
var chances = 2 ; 

while( chances > 0 && hiddenWord.includes("_"))
{
    console.log(`the hidden word :${hiddenWord} `);

    console.log(`Remaining guesse :${chances} `);

    var guess = prompt("Enter a letter : ").toLowerCase();
    // check if letter guess is valid or not 
     if( !guess || guess.length!==1 ||  usedLetter.includes(guess)){ // (!guess) to check guess is empty or not 
        console.log("Invalid guess, Please try again!");
        continue;
    }
    // if guess is valid  
    // add the guess letter to usedletter so that if we type it again it give invalid 
     usedLetter.push(guess);
    
    //  check whether the guess is in randomWord

    var found = false ; 
    for(let i =0 ;i<randomWord.length ;i++){
        if(randomWord[i]== guess){
            // guess is present in random word 
            found = true;
            // now update hidden word 
         hiddenWord = replaceAt(hiddenWord,i,guess); // replace at *** 
        }
    }
    // if guess not in word 
    if(!found){
        chances--;
    }

    // check for win or loss 
    if(!hiddenWord.includes("_")){
        console.log(`you won the word is: ${randomWord}`);
        break;
    }
    else if(chances==0){
        console.log(`you loose the word is : ${randomWord} `);
        break;

    }
}



































































// var randomLetter = randomWord.split("");
// console.log(randomLetter);

// while(true){
// //    break;
    
//     var userLetter = prompt("enter the letter : ");
    
//     var userWord1 = [];
//     if(randomWord.includes(userLetter)){
//         console.log("correct");
        
//         var userWord2 = randomLetter.forEach(element => {
//             if(element == userLetter ){
//                 return element;
                
//             }
//             else if (element!="_"){
//                 userWord1.push("_");
//             }
//         });

//         console.log(userWord1.join(""));

//         if(userWord1.length == userLetter.length){

//         }
//         break;
        
//     }
//     else{
//         console.log("wrong try again");
        
        

//     }

// }
