

const questions = document.querySelectorAll(".question");
// gives all questions divs 


questions.forEach((question) => {

    const btn = question.querySelector(".btn1"); // here we are selecting the btn1 


    btn.addEventListener("click", function () {

        const answerDivision = question.querySelector(".answer-division");
        // logic: if one question tab is opened then other all quetions tabs must be closed 
        //  questions.forEach((item), ()=>{
        //     if(item!== question){
        //         answerDivision
        //     }
        //  })    


        answerDivision.classList.toggle("open-answer");

    })



})

console.log(buttons);
console.log(answerDivision);



