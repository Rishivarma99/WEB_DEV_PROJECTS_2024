const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// this is exact end time of give away
const giveaway = document.querySelector(".giveaway");
// deadline div 
const deadline = document.querySelector(".deadline");
// each time hrs mins left
const items = document.querySelectorAll(".deadline-format h4");

// GETTING THE CURRENT DATE 
// MONTH IS 0 INDEXED BASE (0(JAN)- 11 (DEC))
// now extract full year and all from current date 
const tempDate = new Date();
const tempYear= tempDate.getFullYear();
const tempMonth= tempDate.getMonth();
const tempDay=tempDate.getDate();

// present date done now create a future date that is 10 days ahed 

// get future date and i assigne the countdown for 10 days 
// at 11:30 0 sec 
const futureDate = new Date(tempYear,tempMonth,tempDay+10,11,30,0)
const year = futureDate.getFullYear();
month = months[futureDate.getMonth()]; //GETTING MONTH IN WORD
const weekday=weekdays[futureDate.getDay()];// GETTING WEEKDAY IN WORD
const day = futureDate.getDate(); 
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

// WE ARE SETTING THE GIVEAWAY DEADLINE DATE 
giveaway.textContent = `giveaway ends on ${weekday}, ${day} ${month} ${year} ${hours}:${minutes}`;

// NOW 
const futureTime = futureDate.getTime();
console.log(futureTime);

function getRemaindingTime(){
  // at this movmeent what is the time 
  const today = new Date().getTime();

  // t is remaining time from the computer time 
  const t = futureTime - today;

  // getting each in milliseconds 
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000 ;

  //caluculate each left in ms
  let days = t / oneDay ; //no of days left in numbers 
  days = Math.floor(days);
  //  t % oneDay give the removes the days and return rest of sec left 

  let hours = Math.floor((t%oneDay) / oneHour);
  let minutes = Math.floor((t%oneHour) / oneMinute );
  let seconds = Math.floor((t%oneMinute)/1000) ;

  // now add it to the page 
  const values = [days,hours,minutes,seconds];
  // function that takes each value in values and format tham 

  function format(item){
    if(item<10){
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function(item , index){
       
    item.innerHTML=format(values[index]);

  });

  if(t<0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4> `
  }

}

// for every 1 sec the function is invoked 
let countdown = setInterval(getRemaindingTime,1000);

// to set intial time 
getRemaindingTime();