

class hero {  // class define 
     
    constructor (heroname){  //constructor used for difining property and their values 

        this.heroname = heroname;
    }
    
    // methods 
    setname(newname){
        this.heroname=newname;
    }
     
}

// declare a object 
const salaar = new hero("salaar");
console.log(salaar.heroname);

// to intiate a function 
salaar.setname("deveratha");

console.log(salaar.heroname);
