
function caseInSwitch (val){
  
    var ans ="";

    // SWITCH CHEKS USING === STRICT EQUAL 

    switch (val){
        case 1 : 
        ans = "alpha";
        // APPLY BREAK IF WE DONT WANT TO CONTINUE 
        // FURTHER IN THE SWITCH CODE 
        break;

        case 2 : 
        ans = "beta";
        break ;

        case 3 : 
        ans = "gamma";
        break;

        case 4 :
        ans = "delta";
        break;
         
        // if none of case matched default take care 
        default :
        ans = "give a valid value ";
    }
    return ans ; 


}
console.log(caseInSwitch(36));

// THIS FUNTIONS SHOWS IN SWITCH BY GIVING 
// MULTIPLE VALUES WE CAN GET A SMAE OUTPUT 

function sequentialSizes(val){

    var ans = "";

    switch (val){
        case 1 :
        case 2 :
        case 3:
         ans = "low";
         break;

         case 4 :
        case 5 :
        case 6:
         ans = "mid";
         break;

         case 7 :
        case 8:
        case 9:
         ans = "high";
         break;
    }
    return ans;
}


console.log(sequentialSizes(8)); //high
console.log(sequentialSizes(9)); //high



