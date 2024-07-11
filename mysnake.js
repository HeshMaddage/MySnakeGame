let blockSize = 15;
let col = 30;
let row = 30;

let board;
let context;

let foodX;
let foodY;

let snakeX;
let snakeY;

let snakeBody =[];


window.onload = function () {
    board = document.getElementById("board");
    board.height = row * blockSize;
    board.width = col * blockSize;
    context = board.getContext("2d");

    
    foodPosition();
    setInterval(update, 1000 / 10);

      
}

function update(){

    context.fillStyle = "rgb(56,7,68)";
    context.fillRect(0, 0, board.width, board.height);
    context.fillStyle = "yellow";
    context.fillRect(foodX, foodY, blockSize, blockSize); 

}




function foodPosition() {
    foodX = Math.floor(Math.random() * col) * blockSize;
    foodY = Math.floor(Math.random() * row) * blockSize;
}