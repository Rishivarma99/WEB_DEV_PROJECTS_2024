
// MATH.RANDOM -> GIVE 0 -1 (NOT ONE )

// using floor to round to its nesrest doen integer gives 0-19.999
var randomNumber0to19_1 = Math.floor(Math.random()*20);

console.log(randomNumber0to19_1);

var randomNumber0to19_2 = Math.floor(Math.random()*20);
console.log(randomNumber0to19_2);


// FUNCTION TO get a random number given min and maz 

// should give random nmber including mymin and mymax
function generateRandomNum(mymin,mymax){
  
  return Math.floor(Math.random() * (mymax-mymin+1)) + mymin;

}

console.log(generateRandomNum(2,9));