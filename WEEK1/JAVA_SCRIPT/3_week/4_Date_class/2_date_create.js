
/**
  TO CREATE NEW DATES : 
  const ownDate = new Date(year, month(0-11), day(1-31), hours(0-23), minutes(0-59), seconds(0-59), milliseconds(0-999))
  
  TO SET DATE : 
  ->setFullYear(),setMonth(),setDate(), hours , min ,sec ,milli 

  TO GET DATE : 
   -> same as set 
 */
  
//   TO CREATE : 
  const ownDate = new Date(2002,6,9,11,30,20,0);
  console.log(ownDate);  


//   TO SET DATE :  
const setDate1 = new Date() ; 
console.log(setDate1);

const today = new Date();

today.setFullYear(2024);
console.log("year : " + setDate1);

today.setMonth(2);
console.log("month" + setDate1);

today.setDate(15);
console.log("Date:" + setDate1);

today.setHours(16); // 4:00 PM

today.setMinutes(30);

today.setSeconds(0);

today.setMilliseconds(500);

console.log("Final Date : " + today);

// TO GET : 

console.log(today.getHours());
console.log(today.getMonth());



