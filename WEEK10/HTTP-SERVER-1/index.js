
// TO IMPORT EXPRESS LIB 
const express = require("express");
const port = 3000
const app = express();

// we are sending a request to the server 
// get is used to get back the html code here 
app.get('/' , function (req,res){
    console.log(req.headers["authorization"]);
    res.send('<b> Hi there <b>');
    // res.json(
    //     {
    //         name : 'harikat'
    //     }
    // )
})

// for post is used 
app.post("/about", function (req,res){
   console.log(req.body);
    res.send(
        {
            name : 'Post request'
        }
    )

})


app.listen(port,function(){
    console.log(`App is listneing on port ${port}`);
});