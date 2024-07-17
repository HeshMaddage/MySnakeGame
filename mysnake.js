
let blockSize = 25;
let col = 20;
let row = 20;

let board;
let context;

let foodX;
let foodY;

let snakeX = blockSize * 5;
let snakeY = blockSize * 5;
let speedX = 0;
let speedY = 0;

let snakeBody = [];
let gameOver = false;
let gameInterval;
let a =0;
let difficultySelected = false;
let score =0;

document.addEventListener('DOMContentLoaded', (event) => {
    const easyButton = document.getElementById('easyButton');
    const mediumButton = document.getElementById('mediumButton');
    const hardButton = document.getElementById('hardButton');
    const startButton = document.getElementById('startButton');

    easyButton.addEventListener('click', () => {
        updateDifficulty('Easy');
        updateScore(score);
        fixSpeed('easy');
    });

    mediumButton.addEventListener('click', () => {
        updateDifficulty('Medium');
        updateScore(score);
        fixSpeed('medium');
    });

    hardButton.addEventListener('click', () => {
        updateDifficulty('hard');
        updateScore(score);
        fixSpeed('hard');

    });
    startButton.addEventListener('click', () => {
        if(difficultySelected){
            startGame();
        }
        else{
            alert("Enter difficulty level");
        }

    });
    
    
});

function startGame() {
    snakeX = blockSize * 5;
    snakeY = blockSize * 5;
    speedX = 0;
    speedY = 0;
    snakeBody = [];
    gameOver = false;
    score =0;

    board = document.getElementById("board");
    board.height = row * blockSize;
    board.width = col * blockSize;
    context = board.getContext("2d");
    
    foodPosition();
    document.addEventListener("keyup", changeDirection);

    if (gameInterval) {
        clearInterval(gameInterval);
    }

    gameInterval = setInterval(update, 1000 / a);
}

function update() {
    if (gameOver) {
        return;
    }


    for(let i = 0; i < col; i++) {
        for(let j = 0; j < row; j++) {
            if((i + j) % 2 == 0) {
                context.fillStyle = "rgb(136, 214, 108)";// First color
            } else {
                context.fillStyle = "rgb(180, 227, 128)";// Second color
            }
            context.fillRect(j * blockSize, i * blockSize, blockSize, blockSize);
        }
    }

    context.fillStyle = "yellow";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    if (snakeX == foodX && snakeY == foodY) {
        score += 1;
        updateScore(score);
        playEatSound();
        snakeBody.push([foodX, foodY]);
        foodPosition();
    }

    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }

    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }

    context.fillStyle = "rgb(8, 131, 149)";
    snakeX += (speedX) * blockSize;
    snakeY += (speedY) * blockSize;

    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }
    context.fillRect(snakeX, snakeY, blockSize, blockSize);

    if (snakeX < 0 || snakeX >= col * blockSize || snakeY < 0 || snakeY >= row * blockSize) {
        playGameOver();
        gameOver = true;
        alert("Game Over");
    }
}

function changeDirection(e) {
    if (e.code == "ArrowUp" && speedY != 1) {
        speedX = 0;
        speedY = -1;
    } else if (e.code == "ArrowDown" && speedY != -1) {
        speedX = 0;
        speedY = 1;
    } else if (e.code == "ArrowLeft" && speedX != 1) {
        speedX = -1;
        speedY = 0;
    } else if (e.code == "ArrowRight" && speedX != -1) {
        speedX = 1;
        speedY = 0;
    }
}

function foodPosition() {
    foodX = Math.floor(Math.random() * col) * blockSize;
    foodY = Math.floor(Math.random() * row) * blockSize;

    // Ensure the food does not spawn on the snake
    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeBody[i][0] === foodX && snakeBody[i][1] === foodY) {
            foodPosition();
        }
    }
}

function fixSpeed(difficulty) {
    switch (difficulty) {
        case 'easy':
            a = 5; // 5 frames per second
            break;
        case 'medium':
            a = 10; // 10 frames per second
            break;
        case 'hard':
            a = 15; // 15 frames per second
            break;
    }
    difficultySelected = true;
}
function playEatSound() {
    var eatSound = document.getElementById('eatSound');
    eatSound.play();
}

function playGameOver(){
    var overSound = document.getElementById('overSound');
    overSound.play();
}
function updateScore(newScore) {
    document.getElementById('score').textContent = "Score: " + newScore;
}

function updateDifficulty(difficulty) {
    document.getElementById('level').textContent = "Difficulty: " + difficulty;
}

