
// USE OF GETTER AND SETTER INSIDE A CLASS 

class person {
    constructor (personname){
        this.personname = personname;
    }
    
    // TO GET A VALUE OF A PROPERTY INTIALISED BY THE CONSTRUCTOR 
    get name1(){
        return this.personname;
    }
    set name1(newname){  // if setter not there line no 22 dont work 
        this.personname = newname;
    }
}

// INTIATE AN OBJECT 

const obj1 = new person ("Rishi");

obj1.name1="alluri"; //setter is used here 
console.log(obj1);