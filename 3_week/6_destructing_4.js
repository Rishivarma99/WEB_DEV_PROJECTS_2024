
// we can also pass the object property values a arguments into a function using 
// destructor 

// object :
const obj1 = {
    max: 10 ,
    lenght : 20 ,
    min : 1
};

// arrow function 
const arrow1 = (
    ()=>{
    return function ({max,min})  // we are using distructor to send as arguments 
    {
        return ((max+min)/2); 
    }    
    }
)()

const val = arrow1(obj1);
console.log(val);
