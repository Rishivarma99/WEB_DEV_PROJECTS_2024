
// PROGRAM 1 : Use objects for complex names and values  

const details = [
    {
      name : "harkirat",
      gender : "male"
    },
    {
        name : "yashmi",
        gender:"female"
    },
    {
        name  :"rishi",
        gender: "male"
    }
]

let n = details.length;
for(let i=0; i<n;i++){

    if( details[i].gender == "male"){
        console.log(details[i]["name"]);
    }
}

