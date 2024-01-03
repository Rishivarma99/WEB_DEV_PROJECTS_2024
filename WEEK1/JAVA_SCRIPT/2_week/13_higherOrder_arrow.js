
// IN ARROW FUNC WE CAN WRITE A FUNCTION INSIDE A FUNCTION 

const increment = (function()  {
    return function increment1(number,value=1){
        return number+value ; 
    };
})();

// WE ARE CALLING THE OUTER FUNCTION AND THEN THE INNER FUNTION ()()->  no need 
console.log(increment(5));
console.log(increment(5,2));
