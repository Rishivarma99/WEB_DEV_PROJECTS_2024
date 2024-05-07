
// TRIVAL GAMES QUESTIONS AND ANSWERES 

// CREATE QUETIONS USING OBJECTS IN ARRAY 
// ALWAYS TRY TO RETURN THE CASES 

var questions = [
    {
        no: 1,
        text: "What is html used to",
        choice: ["structure", "style", "logic", "none"],
        answer: 0

    },
    {
        no: 2,
        text: "What element defines the content of a web page?",
        choice: ["<body>", "<head> ", "<title>", "<div>"],
        answer: 0

    },
    {
        no: 3,
        text: "Which attribute is used to link an image to its source file?",
        choice: ["alt", "src", "class", "id"],
        answer: 1

    },
    {
        no: 4,
        text: "Which element defines a list of items with no ordered sequence?",
        choice: ["<menu>", "<li>", "<ol>", "<ul>"],
        answer: 2
    },

]

var score = 0;
startmenu();

// The APP 

function startmenu() {


    var key1 = parseInt(prompt("Enter 1 to start the quiz: \n 2.to get quiz instruction or exit"));
    switch (key1) {
        case 1:
            console.log("Welcome to the Quiz");
            quiz();
            break;
         
         case 2 : 
             console.log("Will be given question with 4 options 1-4 and press 5 to exit the question and go to m,enu ")
             startmenu(); // return to start menu 
             break;
            //  important to keep default 
         default : 
         console.log("Exiting The quiz");
    }
}

function quiz(i=0) {

    for ( i = 0; i < questions.length; i++) {
        //    to traverse each index in array 

        console.log(`Question ${questions[i].no} : ` + questions[i].text);

        // GIVE options uisng loop 
        for (let j = 0; j < questions[i].choice.length; j++) {
            console.log(`${j + 1}. ${questions[i].choice[j]}`);
        }
        console.log("5 . get menu");

        // to select an option 
        let userAnswer ; 
        
        // ⭐
        // BETTER WAY TO TAKE USEINPUT 
        do{
             userAnswer = parseInt(prompt("Enter your ansere || press 5 for menu ")) ;   
            // if the any one below case is correct the only user input is agian taken 
        }while(isNaN(userAnswer) || userAnswer<1 || userAnswer>6 || (userAnswer===5 && userAnswer==='m'))

        // check user ans valid or not 
      
        // to get menu
        if (userAnswer == 5) {
            quizmenu(i);
            return ; 
        }
        else if(userAnswer==0){
            console.log("exiting the quiz");
            return ; 
        }

        // check win or loose 
        console.log(questions[i].choice[userAnswer-1] );
        console.log( questions[i].choice[questions[i].answer]);
        if (questions[i].choice[userAnswer-1] == questions[i].choice[questions[i].answer]) {
            score++;
            console.log("Right Answer ✨ ");
        
        }
        else {
            console.log("Wrong Answer");
        }

        if(i==questions.length - 1){
            console.log("Quiz Completed:");
            console.log("Your final score is : " + score);
            // now go back to start menu 
            startmenu();
        }

    }
    console.log("quiz ended")

}
function quizmenu(currentquestionindex) {
  
    var key = parseInt(prompt(" 1.Enter to restart the quiz \n 2.To get instructions")) ; 

    switch(key) {
        case 1 : 
        quiz(currentquestionindex);
        break ; 

        case 2 : 
        console.log("Instrunctions");
        break ; 
        
        default : 
        console.log("Exiting The quiz");

    }
   
    
}


