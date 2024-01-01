

// THIS IS A GAME THAT THE USER IS ASKED TO GUESS A NUMBER
// IN THE PARTICULAR RANGE AND WE WILL CHECK THAT WITH THE COMPUTER GENERATED NUMBER  

// Ask range 
//PROMT IS A STRING WE NEED TO CONVERT INTO DESIRED ****************
const minRange1 = prompt("Enter min range");
const maxRange1 =prompt("Enter max range");

const minRange = parseInt(minRange1);
const maxRange = parseInt(maxRange1);
// var minRange = 1;
// var maxRange = 10;

const randomNum = Math.floor(Math.random() * (maxRange - minRange + 1) ) + minRange ; //give 1 to 10 

console.log(randomNum);

// ask user to give number 

for(let i =0 ;i<5 ;i++){
    const userNum = prompt(`Enter your number in range ${minRange} to ${maxRange},Chances left ${i}`);

    if(randomNum-userNum== 0 ){
        alert("WOW YOU GOT IT RIGHT! CONGRATS");
        break ;
    }
    else{
        alert("THAT's NEAR ! TRY AGAIN ");
    }

}