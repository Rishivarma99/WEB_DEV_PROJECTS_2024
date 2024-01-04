

// TO CREATE A OBJECT USING FUNCTION AND ARROW FUNCTON 

const createPerson=  (name,age,gender)=>(

    // creating and returning an object 
    // return {
    //     name : name,
    //     age : age ,
    //     gender : gender
    // };
    
    // OR 

    // USING DESTRUCTOT 
   
    { name,age,gender}
    
)

console.log(createPerson("Rishi",22,"male"));