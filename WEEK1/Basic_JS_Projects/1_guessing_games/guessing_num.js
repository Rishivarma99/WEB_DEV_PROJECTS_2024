

// THIS IS A GAME THAT THE USER IS ASKED TO GUESS A NUMBER
// IN THE PARTICULAR RANGE AND WE WILL CHECK THAT WITH THE COMPUTER GENERATED NUMBER  

// Ask range 
//PROMT IS A STRING WE NEED TO CONVERT INTO DESIRED ****************
const minRange = parseInt(prompt("Enter min range"));
const maxRange =parseInt(prompt("Enter max range"));
// GENERATE RANDOM NUMBER 
const randomNum = Math.floor(Math.random() * (maxRange - minRange + 1) ) + minRange ; //give 1 to 10 

console.log(randomNum);

// ask user to give number 

for(let i =0 ;i<5 ;i++){
    const userNum = prompt(`Enter your number in range ${minRange} to ${maxRange},Chances left ${5-i}`);
    if(!userNum || userNum<1){
        console.log("Invalid guess Retry");
    }
    if(randomNum-userNum== 0 ){
        alert("WOW YOU GOT IT RIGHT! CONGRATS");
        break ;
    }
    else{
        alert("THAT's NEAR ! TRY AGAIN ");
    }

}