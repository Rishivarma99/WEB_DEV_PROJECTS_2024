// CLASSES : THE NEED OF CLASS 

const dog = {
    name : "dog",
    legCount: 2 ,
    speaks:"bhow"
};
const cat = {
    name : "cat",
    legCount : 4,
    speaks : "meow"
};

// TO PRINT THE OBJ DETAILS 
// as you can see same logic is repeating :
console.log( "Animal: "+ dog.name + " has legs "+ dog.legCount+" speaks "+ dog.speaks);
console.log( "Animal: "+ cat.name + " has legs "+ cat.legCount+" speaks "+ cat.speaks);

// also we can use function by passing obj BUT STILL PROBLEM OCCUR 

// SO USE CALSS CLASS IS A BLUE PRINT 

class Animal{
  
    constructor(name,legCount,speaks){
        this.name = name ;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    addColor(color){
       this.color = color;
    }
    print1(){
        console.log("hi" + this.legCount);
    }
}

// CREATING AN OBJ OF A CLASS 
let dog1 = new Animal("dog",2,"bhow");
let cat1 = new Animal("cat",4,"meow");

// WE CAN CALL THE FUNCTIONS 
cat1.print1();

cat1.addColor("white");
console.log(cat1);