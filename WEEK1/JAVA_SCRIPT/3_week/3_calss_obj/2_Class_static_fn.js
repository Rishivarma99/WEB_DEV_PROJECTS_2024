/**
  STATIC FUNCTION IN CLASS 
  ->directly related to class 
  ->Called without creating object 
  ->Cannot access this keyword which referes to current obj 

  static function or variables 
 */

class Animal{
     
    static animalCount = 0 ;

    constructor(name,color){
        this.name = name ;
        this.color= color;
        // IMP TO CALL LIKE THIS 
        Animal.animalCount++;
    }

    static func1(){
        console.log("Animal class");
    } 
}

// STATIC FUNCTIONS 
Animal.func1();

let cat1  = new Animal("cat", "blue");

// STAIC VARIABLES 
console.log(Animal.animalCount);