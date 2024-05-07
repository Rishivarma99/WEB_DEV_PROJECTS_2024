
// ARROW FUNCTION : 

const magic = () => {
    
    Date();

}

// EXAMPLE : 

// => is used instead of function 
const myConcat = (arr1,arr2) => {
 
    return arr1.concat(arr2);
};

console.log(myConcat([1,2,3], [4,5,6]));

// REVISE : 07-05

const addme = (val1 , val2) =>{
    return val1 + val2 ; 
}
console.log(addme(2,3));

const func1 = (val1 , val2 ) =>{
    
    // generate random numbers 
    let num = Math.floor(Math.random()*5) + 1 ; // generate number from 1-5 

    const obj = {
        name : val1,
        roll : num,
        age : val2
    }
    return obj ; 
}

const obj1 = func1("rishi" , 22);
console.log(obj1);