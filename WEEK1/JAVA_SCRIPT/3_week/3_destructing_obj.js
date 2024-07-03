

// to copy values of objects in simple way 

const obj1 = {
    x: "hi",
    y: "hello",
    z: "bye"
}

const obj2 = {
    name: 'rishi',
    age: '22'
}

// destruction of object 2 : 
const { name: myname, age: myage } = obj2;
console.log("destruction of object2 " + myname + " " + myage);

// TO CPY NORMALLY 
// const a = obj1.x;
// const b = obj1.y;
// const c= obj1.z;

// TO CPY USING DESTRUCTOR

// x:a means to copy the value of property x of obj1 in a 
const { x, y: b, z: c } = obj1;

console.log(x); // print 

// BASIC EXAMPLE 

const AVG_TEMPERATURE = {
    today: 31.5,
    tomorrow: 70
};

function getTempOfTom(avgTemp) {  // avgTemp is cpy of object AVG_TEMPERATURE 
    // avgTemp is a object here 
    // we are taking the value in obje and coping it into tempOftom from avgTemp(AVG_TEMPERATURE) object 
    const { tomorrow: tempOftom } = avgTemp;
    return tempOftom;
}

console.log(getTempOfTom(AVG_TEMPERATURE));
