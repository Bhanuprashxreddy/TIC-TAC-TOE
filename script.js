const board = document.querySelector(".board");
const cells = board.children;
let player1_x = document.querySelector(".X");
let player1_o = document.querySelector(".O");
const query = document.querySelector(".query");
// where player1 selects x or o via buttons div
// below is a const reset div 
const resetButton = document.querySelector(".resetGame");
resetButton.style.display = "none";
const resetCall = document.querySelector(".resetCall");
let player1_choice = "";
let player2_choice = "";
let turn = 0;
// select the div of span windecsion to shwocase winner
const winnerDecision = document.querySelector(".winDecision");
// if any one clicks resetButton event listeneres triggeren on click calls reset() function
resetCall.addEventListener("click", reset);
// board data intialized as 3x3 2d array
let board_xox = [["", "", ""], ["", "", ""], ["", "", ""]];
// winner variable
let winner = "";
// if player1 clicks player1_x button we select choice of player1 as x and player2 choice as o and vieve versa
player1_x.addEventListener("click", () => {
    player1_choice = "X";
    player2_choice = "O";
    query.style.display = "none";
    resetButton.style.display = "flex";
})
player1_o.addEventListener("click", () => {
    player1_choice = "O";
    player2_choice = "X";
    query.style.display = "none";
    resetButton.style.display = "flex";
    resetCall.style.display = "block";
});
function addContent(e) {
    if (e.target.innerHTML !== "") {
        return;
    }
    if (winner !== "") {
        return;
    }
    const row = Number(e.target.dataset.row);
    const col = Number(e.target.dataset.col);
    if (board_xox[row][col] !== "") {
        return;
    }
    if (turn % 2 == 0) {
        // if its even then we need to make a insertion of player1_choice
        // based on player1_choice as x or o we insert that x or o image respectively 
        if (player1_choice === "O") {
            e.target.innerHTML = '<img src="./assets/image_O-removebg-preview.png" class="w-20 h-20 object-contain mx-auto" alt="">';
            board_xox[row][col] = "O";
        }
        else {
            e.target.innerHTML = '<img src="./assets/image_x-removebg-preview.png" class="w-20 h-20 object-contain mx-auto" alt="">';
            board_xox[row][col] = "X";
        }
    }
    else {
        // it means it is odd so player2_choice need to be inserted 
        // based on player2_choice
        if (player2_choice === "O") {
            e.target.innerHTML = '<img src="./assets/image_O-removebg-preview.png" class="w-20 h-20 object-contain mx-auto" alt="">';
            board_xox[row][col] = "O";
        }
        else {
            e.target.innerHTML = '<img src="./assets/image_x-removebg-preview.png" class="w-20 h-20 object-contain mx-auto" alt="">';
            board_xox[row][col] = "X";
        }
    }
    turn++;
    winCheck(); // after every move of a player chek the board player1 or player2 have any winning cnoditons 

}
function startGame() {
    for (let cell of cells) {
        cell.addEventListener("click", addContent);
    }
}
// wincheck()
function winCheck() {
    // -----win check for x conditon 8 conditons 
    // wining conditons cehck diagonal 
    if ((board_xox[0][0] === "X" && board_xox[1][1] === "X") && (board_xox[1][1] === "X" && board_xox[2][2] === "X")) {
        if (player1_choice === "X") {
            winner = "Player 1 wins !!!"
            winnerDecision.textContent = winner;
        }
        else {
            winner = "Player 2 wins !!!"
            winnerDecision.textContent = winner;
        }
        return;

    }
    else if ((board_xox[0][2] === "X" && board_xox[1][1] === "X") && (board_xox[1][1] === "X" && board_xox[2][0] === "X")) {
        if (player1_choice === "X") {
            winner = "Player 1 wins !!!"
            winnerDecision.textContent = winner;
        }
        else {
            winner = "Player 2 wins !!!"
            winnerDecision.textContent = winner;
        }
        return;
    }
    // row wise check for winning x conditon
    else if ((board_xox[0][0] === "X" && board_xox[0][1] === "X") && (board_xox[0][1] === "X" && board_xox[0][2] === "X")) {
        if (player1_choice === "X") {
            winner = "Player 1 wins !!!"
            winnerDecision.textContent = winner;
        }
        else {
            winner = "Player 2 wins !!!"
            winnerDecision.textContent = winner;
        }
        return;
    }
    else if ((board_xox[1][0] === "X" && board_xox[1][1] === "X") && (board_xox[1][1] === "X" && board_xox[1][2] === "X")) {
        if (player1_choice === "X") {
            winner = "Player 1 wins !!!"
            winnerDecision.textContent = winner;
        }
        else {
            winner = "Player 2 wins !!!"
            winnerDecision.textContent = winner;
        }
        return;
    }
    else if (((board_xox[2][0] === "X" && board_xox[2][1] === "X") && (board_xox[2][1] === "X" && board_xox[2][2] === "X"))) {
        if (player1_choice === "X") {
            winner = "Player 1 wins !!!"
            winnerDecision.textContent = winner;
        }
        else {
            winner = "Player 2 wins !!!"
            winnerDecision.textContent = winner;
        }
        return;
    }
    // column wise check for x winning condition
    else if ((board_xox[0][0] === "X" && board_xox[1][0] === "X") && (board_xox[1][0] === "X" && board_xox[2][0] === "X")) {
        if (player1_choice === "X") {
            winner = "Player 1 wins !!!"
            winnerDecision.textContent = winner;
        }
        else {
            winner = "Player 2 wins !!!"
            winnerDecision.textContent = winner;
        }
        return;
    }
    else if ((board_xox[0][1] === "X" && board_xox[1][1] === "X") && (board_xox[1][1] === "X" && board_xox[2][1] == "X")) {
        if (player1_choice === "X") {
            winner = "Player 1 wins !!!"
            winnerDecision.textContent = winner;
        }
        else {
            winner = "Player 2 wins !!!"
            winnerDecision.textContent = winner;
        }
        return;
    }
    else if ((board_xox[0][2] === "X" && board_xox[1][2] === "X") && (board_xox[1][2] === "X" && board_xox[2][2] == "X")) {
        if (player1_choice === "X") {
            winner = "Player 1 wins !!!"
            winnerDecision.textContent = winner;
        }
        else {
            winner = "Player 2 wins !!!"
            winnerDecision.textContent = winner;
        }
        return;
    }
    // ------------------ win check for "O"  8 condtions
    // win check diagonal for O
    if ((board_xox[0][0] === "O" && board_xox[1][1] === "O") && (board_xox[1][1] === "O" && board_xox[2][2] === "O")) {
        if (player1_choice === "O") {
            winner = "Player 1 wins !!!"
            winnerDecision.textContent = winner;
        }
        else {
            winner = "Player 2 wins !!!"
            winnerDecision.textContent = winner;
        }
        return;
    }
    else if ((board_xox[0][2] === "O" && board_xox[1][1] === "O") && (board_xox[1][1] === "O" && board_xox[2][0] === "O")) {
        if (player1_choice === "O") {
            winner = "Player 1 wins !!!"
            winnerDecision.textContent = winner;
        }
        else {
            winner = "Player 2 wins !!!"
            winnerDecision.textContent = winner;
        }
        return;
    }
    // row wise check for winning O conditon
    else if ((board_xox[0][0] === "O" && board_xox[0][1] === "O") && (board_xox[0][1] === "O" && board_xox[0][2] === "O")) {
        if (player1_choice === "O") {
            winner = "Player 1 wins !!!"
            winnerDecision.textContent = winner;
        }
        else {
            winner = "Player 2 wins !!!"
            winnerDecision.textContent = winner;
        }
        return;
    }
    else if ((board_xox[1][0] === "O" && board_xox[1][1] === "O") && (board_xox[1][1] === "O" && board_xox[1][2] === "O")) {
        if (player1_choice === "O") {
            winner = "Player 1 wins !!!"
            winnerDecision.textContent = winner;
        }
        else {
            winner = "Player 2 wins !!!"
            winnerDecision.textContent = winner;
        }
        return;
    }
    else if (((board_xox[2][0] === "O" && board_xox[2][1] === "O") && (board_xox[2][1] === "O" && board_xox[2][2] === "O"))) {
        if (player1_choice === "O") {
            winner = "Player 1 wins !!!"
            winnerDecision.textContent = winner;
        }
        else {
            winner = "Player 2 wins !!!"
            winnerDecision.textContent = winner;
        }
        return;
    }
    // column wise check for O winning condition
    else if ((board_xox[0][0] === "O" && board_xox[1][0] === "O") && (board_xox[1][0] === "O" && board_xox[2][0] === "O")) {
        if (player1_choice === "O") {
            winner = "Player 1 wins !!!"
            winnerDecision.textContent = winner;
        }
        else {
            winner = "Player 2 wins !!!"
            winnerDecision.textContent = winner;
        }
        return;
    }
    else if ((board_xox[0][1] === "O" && board_xox[1][1] === "O") && (board_xox[1][1] === "O" && board_xox[2][1] == "O")) {
        if (player1_choice === "O") {
            winner = "Player 1 wins !!!"
            winnerDecision.textContent = winner;
        }
        else {
            winner = "Player 2 wins !!!"
            winnerDecision.textContent = winner;
        }
        return;
    }
    else if ((board_xox[0][2] === "O" && board_xox[1][2] === "O") && (board_xox[1][2] === "O" && board_xox[2][2] == "O")) {
        if (player1_choice === "O") {
            winner = "Player 1 wins !!!"
            winnerDecision.textContent = winner;
        }
        else {
            winner = "Player 2 wins !!!"
            winnerDecision.textContent = winner;
        }
        return;
    }
    // of any of the aboev x or o winnign conditton doesnt satisfy then check  for all indexes have been filled or not if yes after belwo nested loop then it si a draw
    for (let i = 0; i < board_xox.length; i++) {
        for (let j = 0; j < board_xox[i].length; j++) {
            if (board_xox[i][j] === "") {
                return;
            }
        }
    }
    // it it reacehs till this line it means it is a draw
    drawGame();
}
function drawGame() {
    winner = "it is a Draw Match !!!";
    winnerDecision.textContent = winner;
}
function reset() {
    // reset the turn counter board_xox and cells of cell 
    for (let i = 0; i < board_xox.length; i++) {
        for (let j = 0; j < board_xox[i].length; j++) {
            board_xox[i][j] = "";
        }
    }
    turn = 0;
    player1_choice = "";
    player2_choice = "";
    winner = "";
    winnerDecision.textContent = "";
    for (let cell of cells) {
        cell.innerHTML = "";
    }
    // after reet has been done we ned to remoe the reet button and pu tthe query div which asks player 1 for x or o
    resetButton.style.display = "none";
    query.style.display = "flex";
}

startGame();// calling funtion to start the game-->