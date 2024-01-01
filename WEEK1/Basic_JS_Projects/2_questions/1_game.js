
// TRIVAL GAMES QUESTIONS AND ANSWERES 

// CREATE QUETIONS USING OBJECTS IN ARRAY 

var questions = [
    {
        no: 1,
        text: "What is html used to",
        choice: ["structure", "style", "logic", "none"],
        answer: 1

    },
    {
        no: 2,
        text: "What element defines the content of a web page?",
        choice: ["<body>", "<head> ", "<title>", "<div>"],
        answer: 1

    },
    {
        no: 3,
        text: "Which attribute is used to link an image to its source file?",
        choice: ["alt", "src", "class", "id"],
        answer: 2

    },
    {
        no: 4,
        text: "Which element defines a list of items with no ordered sequence?",
        choice: ["<menu>", "<li>", "<ol>", "<ul>"],
        answer: 3
    },

]

var score = 0;
startmenu();

// The APP 

function startmenu() {
    var queNum = 0;

    var key1 = parseInt(prompt("Enter 1 to start the quiz:"));
    switch (key1) {
        case 1:
            console.log("Welcome to the Quiz");
            quizmenu(queNum);
            break;
    }
}


function quizmenu(queNum) {

    var key2 = parseInt(prompt("Enter 1 : to get the qustion \n Enter 2 : go to next question \n Enter 3 : retry the question"));

    switch (key2) {

        case 1:
            console.log("here is your question:");
            quiz(queNum);
            queNum++;
            break;
        // go to next question
        case 2:
            queNum += 2;
            console.log("Here is your next question");

            quiz(queNum);
            break;
        // retry
        case 3:
            console.log("Ok retry it :")

            quiz(queNum);
            break;

    }
}

function quiz(queNum) {



    // var score = 0 ;
    for (let i = queNum; i < questions.length; i++) {
        //    to traverse each index in array 

        console.log(`Question ${questions[i].no} : ` + questions[i].text);

        // GIVE options uisng loop 
        for (let j = 0; j < questions[i].choice.length; j++) {
            console.log(`${j + 1}. ${questions[i].choice[j]}`);
        }
        console.log("5 . get menu");

        // to select an option 
        const userAnswer = parseInt(prompt("Enter your Answer"));

        // check user ans valid or not 
        if (!userAnswer || userAnswer < 0 || userAnswer > 6) {
            console.log("Please enter a valid choice");
            // if wrond retry choice once 
            // userAnswer = parseInt(prompt("Enter your Answer"));
            quizmenu(queNum);


        }
        // to get menu
        if (userAnswer == 5) {
            quizmenu(queNum);
        }

        // check win or loose 
        if (questions[i].choice[userAnswer] == questions[i].choice[questions[i].answer]) {
            score++;
            console.log("Right Answer ✨ SCORE : " + score);
            if(i>4){
                break;
            }
        }
        else {
            console.log("Wrong Answer");
            quizmenu(queNum);
        }

        // queNum++;



    }
    console.log("quiz ended")

}


// switch (key) {

//     // to start the quiz
//     case 1:
//         console.log("Quiz Started!");

//         break;

//     // go to next question
//     case 2:
//         console.log("Here is your next question")

//         break;
//     // retry
//     case 3:
//         console.log("Ok retry it :")

//         break;
// }





