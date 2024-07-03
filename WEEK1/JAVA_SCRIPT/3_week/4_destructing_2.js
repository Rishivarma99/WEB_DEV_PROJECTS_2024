
// Destructing in nested objects 

// NESTED OBJECT 
const AVG_TEMPERATURE = {
    today: { min: 10, max: 80 },
    tomorrow: { min: 15, max: 90 }
};

function getTempOfTom(object_cpy1) {

    // const {min :tempOftom_min , max : tempOftom_max} =object_cpy1["tomorrow"];
    // or 
    const { tomorrow: { min: tempOftom_min }, tomorrow: { max: tempOftom_max } } = object_cpy1;

    return [tempOftom_max, tempOftom_min];


}

console.log(getTempOfTom(AVG_TEMPERATURE));