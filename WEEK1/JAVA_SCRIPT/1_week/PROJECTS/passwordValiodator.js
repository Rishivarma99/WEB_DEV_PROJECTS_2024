



// should be of more than 8 letters
// atleast 1 uppercase 1 number 

alert("hi");
const password = prompt("Enter the password : ");

// var password = "SecurePss123";

if(passwordCheck(password)){
    console.log("Password is valid");
}
else{
    console.log( "Password not valid");
}


// console.log("Enter your pawwsord:");


function checkCase (password){

     
    for(var i =0;i<password.length;i++){
        // EXPLICITY WE SHOULD CONVERT THE LEETER TO A ASCII VALUE TO COMPARE WITH 65 CharCodeAt(indexof string )
        // if(password[i].charCodeAt(0)>=65 && password[i].charCodeAt(0)<=90)
        if(password[i]>="A" && password[i]<='Z')
        {
            
            return true ;
        
        }
    }
    return false;
}
function checkNum(password){
    for(var i =0;i<password.length;i++){
        // IMPLICITLY NO NEED TO CONVERT A NUMBER INTO ASCII 
        if(password[i]>= 0 && password[i]<=9){
            
            return true ;
        
        }
    }
    return false;
}

function passwordCheck(password){
    
    var valid = false ;

    return password.length>= 8 && checkCase(password) && checkNum(password) ;
        
  
}



