// USING ARRAYS OF OBJECTS 


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
        text: "Which element defines a list of items with ordered sequence?",
        choice: ["<menu>", "<li>", "<ol>", "<ul>"],
        answer: 3
    },

]

var currentQueIndex = 0;
var score = 0;


const mainBox = document.getElementById("main");

const questionBox = document.getElementById("show-question")
 
const userInput = document.getElementById("answer") ;
const submitButton = document.getElementById("submit-btn");

const nextButton = document.getElementById("next");


function displayQuestion(){
    const question = questions[currentQueIndex];
    
    questionBox.innerHTML="";

    const questionText = document.createElement("p");
    
    questionText.textContent=`Q${question.no}. ${question.text}`;
    
    questionBox.appendChild(questionText);

    questionText.classList.add("question");
   

    // APPLY OPTIONS  
    const optionsText = document.createElement("p");
    
    // for(var i = 0 ; i<question1.choice.length ; i++){
       
    //     const span = document.createElement("span");

    //     span.innerText = `${i+1}.${question1.choice[i]}`;
        
    //     optionsText.appendChild(span);
    // }

    question.choice.forEach((choice1,index) =>{
        const span = document.createElement("span");

        span.innerText = `${index+1}.${choice1}`;
        
        optionsText.appendChild(span);
    })
    
    questionBox.appendChild(optionsText);
    optionsText.classList.add("options");
} 

function handleSubmit (question){
    const userAnswer = parseInt(userInput.value);

    if(isNaN(userAnswer)){
        alert("Please Enter a valid nmumber");
    }
    else if(userAnswer == question.answer){
      alert("YOU ENTERED THE CORRECT ANSWER");
      score++;
      handleNext();
    }
    else {
        alert("Entered wrong ans");
    }
    userInput.value="";
}

function handleNext(){
    currentQueIndex++;
    if(currentQueIndex < questions.length){
          displayQuestion();
    }
    else{
        alert("Quiz Completed : Your Score : " + score + "/" + questions.length);
    }
}

submitButton.addEventListener("click" , function() {
    handleSubmit(questions[currentQueIndex]) 
});
nextButton.addEventListener("click" , handleNext);

displayQuestion();

