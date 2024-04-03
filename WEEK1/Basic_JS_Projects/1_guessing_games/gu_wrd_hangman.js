

// THE USER SELECT SHOUD GUESS THE WORD BY SELECTINFG ECAH LETTER
// IF THAT LETTER PRESENT IN RANDOM WORD THEN  THE WORD IS CINSTRUCTED OTHEREWISE IT IS REVOKED 
// AS STRING IN IMMUTABLE CANT CHANGE A LETTER DIRECTLY SO USE SOME FUNCTION LIKE REPLACEAT

alert("hi");
// replace functions
function replaceAt(str, index, replacement) {
    if(index<0 || index>=str.length){
        return str ;
    }
    
    // method -1 
    // return str.substring(0, index) + replacement + str.substring(index + 1);
     
    //  method-2 
    const arr1 = str.split('');
    arr1[index]=replacement;
    return arr1.join('');

  }

var words = ["apple" ,"mango","kiwi","banana","orange" ];


var randomWord = words[Math.floor(Math.random() * words.length)];
console.log(randomWord); 
var hiddenWord = randomWord.replace(/./g , "_");
// console.log(hiddenWord); 
var chances = 2 ; 

while( chances > 0 && hiddenWord.includes("_"))
{

    console.log(`the hidden word :${hiddenWord} `);
    console.log(`Remaining guesse :${chances} `);

    var guess = prompt("Enter a letter : ").toLowerCase();
    // check if letter guess is valid or not 
     if( !guess || guess.length!==1 ||  hiddenWord.includes(guess)){ // (!guess) to check guess is empty or not 
        console.log("Invalid guess, Please try again!");
        continue;
     }
    // USING STRING METHOD TO FIND THE GUESSED LETTER PRESENT IN RANDOM WORD 
    if(randomWord.includes(guess))
    {      
         let index = randomWord.indexOf(guess);
         while(index!=-1)
         {
            hiddenWord = replaceAt(hiddenWord,index,guess);
            index = randomWord.indexOf(guess,index+1);
         }  
    }
    else{ // IF GUESSED LETTER NOT FOUND 
        chances-- ;
    }
}
    // IF OUT OF LOOP ONLY 2 CASES 
    if(!hiddenWord.includes("_")){
        console.log(`you won the word is: ${randomWord}`);  
    }
    else if(chances==0){
        console.log(`you loose the word is : ${randomWord} `);
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
