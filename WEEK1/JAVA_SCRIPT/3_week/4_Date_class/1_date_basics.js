/**
 DATE  :
   ->to intiate date object and get the current date : const <name> = new date();  
   ->1s = 1000ms , 1m = 60s, 1hr = 60m, 1d = 24hr
    
  IMPORTANT METHODS WE CA PERFORM ON A DATE OBJECT :
  ->getDate(): give the date of the month 1-31
  ->getMonth: it is 0-index based (0(jan)-11(dec))
  ->getFullYear(): we will get the year 
  ->getDay: also 0-indexing and returns a number from 0 to 6 : from Sunday(0) to Saturday(6) 
  ->getTime(): returns in millisections from 1970(fixed time)  : can be used to get the difference between two time objects 
  ->toLocaleDateString : get in date format
  ->toLocaleTimeString : to get time format

 */

const currentDate = new Date();

console.log(currentDate); //2024-02-27T16:44:29.194Z

console.log(currentDate.getDate());   //27
console.log(currentDate.getMonth() + 1); //2
console.log(currentDate.getFullYear()); //2024
console.log(currentDate.getDay());  // 2 -> (sunday(0),monday(1),tuesday(2))



console.log("time in ms since 1970 : ", currentDate.getTime());

console.log(currentDate.toLocaleDateString());
console.log(currentDate.toLocaleTimeString());

