
function freezeObj() {
    "use strict";

    const obj1 = {

        PI: 3.14
    };

    Object.freeze(obj1);  // WE NEED TO FREEZE OBJECT 

    try {

        obj1.PI = 99; //but should not change 
        console.log("no error ")
        console.log(obj1.PI);

    } catch (error) {
        console.log("error");
    }
    return obj1.PI;
}

const PI = freezeObj();