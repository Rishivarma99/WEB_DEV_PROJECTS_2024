/**
 JSON : 
 */

 //  OBJ -> STRING 
 const object1  = {
    name : "rishi",
    age : 20 
 };


 const string1 = JSON.stringify(object1);
 console.log(string1); // STRING {"name":"rishi","age":20}

//  STRING -> OBJECT 
 const string2 = `{ "name" : "rishi" , "age": 20 }`;

 let obj2 = JSON.parse(string2);
 console.log(obj2); // OBJECT : { name: 'rishi', age: 20 }
 console.log(obj2.name);