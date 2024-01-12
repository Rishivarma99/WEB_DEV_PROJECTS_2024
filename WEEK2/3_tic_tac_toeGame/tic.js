// here we can use to buid game sike 

// cells represent all boxes 
var cells = document.querySelectorAll(".cell"); 
let currentPlayer = "X";
let gameOver = false;
function handleCellClick(cell){

    if(gameOver || cell.textContent !=""){
        return ;
    }
    cell.textContent = currentPlayer;
    checkWinner();
    switchPlayer();
} 

function checkWinner(){
  
    const winningCombo=[

        [0,1,2],
        [3,4,5],
        [6,7,8]
    ];
    for(const combo of winningCombo){
        const cell1 = cells[combo[0]];
        const cell2 = cells[combo[1]];
        const cell3 = cells[combo[2]];
          
        if (cell1.textContent === cell2.textContent && cell2.textContent === cell3.textContent && cell1.textContent !== "") 
        {
            alert(`${currentPlayer} wins!`);
            gameOver = true;
            return;
        }
          
    }
    // ALL FULL NO WINNER 
    const cellsArray = Array.from(cells);
    if(cellsArray.every((cell) => cell.textContent !=="")){
  alert("its a tie");
  gameOver = true;
    } 

}
function switchPlayer (){
    currentPlayer = currentPlayer=== "X" ? "O" : "X";
}
cells.forEach((cell) => cell.addEventListener("click", ()=>{
    return handleCellClick(cell);
}));
