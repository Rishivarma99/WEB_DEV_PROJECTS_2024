
const sum = ( () => { //ARROW FUNCTION 
  
    return function sum (... args) { //INSIDE FUNCTION 
        // const args = [x,y,z]; // alter we can use rest operator 
        
        // a : accumulator and b is current value 
        var su = args.reduce((a,b)=> a+b);  // REDUCE IS A ARRAY METHOD USE TO REDUCE THE ARRAY 
        return su;
    };
  })();

  console.log(sum(1,2,3));