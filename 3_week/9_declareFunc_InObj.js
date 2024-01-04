
// We can declare function in object more easly 

const obj1 = {
    name : "rishi",

    setage : function (age){
        // age : age;
        console.log(`i am a ${age} years old`);

    },
    
    // easier way to difine function 
    setGender(gender) {
        // gender : gender;
        console.log(`i am a ${gender}`);
    },

    setname (newname){
        this.name= newname;
    }
}

// obj1.setGender("male");

obj1.setname("Alluri rishi ");
// console.log(obj1.setage(22));

// console.log(obj1.setGender("male"));

console.log(obj1);
