

// DISIGN A FUNCTION THAT TAKE MULTIPLE CARDS
// AND INC OR DEC THE GLOBAL VARIABLE COUNT AND IF 
// COUNT GRATER THAN 0 WE BET OTERWISE WE HOLD 

var count =0;
function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
         
        count++;
        break;

        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;


    }

    var holdbet = "hold" ;
    if(count >0){
        holdbet ="bet";
    }

    return count + " "+ holdbet;
}


cc(3); cc("A") ; cc("Q") ; cc("Q");
console.log(cc(3));