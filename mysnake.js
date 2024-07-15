
/*let blockSize = 15;
let col = 30;
let row = 30;

let board;
let context;

let foodX;
let foodY;

let snakeX = blockSize *5;
let snakeY = blockSize *5;
let speedX = 0;
let speedY = 0;

let snakeBody = [];
let gameOver = false;
let a;

document.addEventListener('DOMContentLoaded', (event) => {
    const easyButton = document.getElementById('easyButton');
    const mediumButton = document.getElementById('mediumButton');
    const hardButton = document.getElementById('hardButton');

    easyButton.addEventListener('click', () => {
        fixSpeed('easy');
        startGame();
    });

    mediumButton.addEventListener('click', () => {
        fixSpeed('medium');
        startGame();
    });

    hardButton.addEventListener('click', () => {
        fixSpeed('hard');
        startGame();
    });
});

function startGame() {
    // Reset variables for a new game
    snakeX = blockSize * 5;
    snakeY = blockSize * 5;
    speedX = 0;
    speedY = 0;
    snakeBody = [];
    gameOver = false;

    board = document.getElementById("board");
    board.height = row * blockSize;
    board.width = col * blockSize;
    context = board.getContext("2d");

    foodPosition();
    document.addEventListener("keyup", changeDirection);
    setInterval(update, 1000 / 10);
}

function update() {
    if (gameOver) {
        return;
    }

    context.fillStyle = "rgb(56,7,68)";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = "yellow";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX, foodY]);
        foodPosition();
    }

    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }

    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }

    context.fillStyle = "rgb(45,74,122)";
    snakeX += (speedX * a) * blockSize;
    snakeY += (speedY * a) * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);

    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }

    if (snakeX < 0 || snakeX >= col * blockSize || snakeY < 0 || snakeY >= row * blockSize) {
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
}

function fixSpeed(difficulty) {
    switch (difficulty) {
        case 'easy':
            a = 0.5;
            break;
        case 'medium':
            a = 1;
            break;
        case 'hard':
            a = 1.5;
            break;
    }
}*/
/*let blockSize = 15;
let col = 30;
let row = 30;

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
let a;

document.addEventListener('DOMContentLoaded', (event) => {
    const easyButton = document.getElementById('easyButton');
    const mediumButton = document.getElementById('mediumButton');
    const hardButton = document.getElementById('hardButton');

    easyButton.addEventListener('click', () => {
        fixSpeed('easy');
        startGame();
    });

    mediumButton.addEventListener('click', () => {
        fixSpeed('medium');
        startGame();
    });

    hardButton.addEventListener('click', () => {
        fixSpeed('hard');
        startGame();
    });
});

function startGame() {

    snakeX = blockSize * 5;
    snakeY = blockSize * 5;
    speedX = 0;
    speedY = 0;
    snakeBody = [];
    gameOver = false;


    board = document.getElementById("board");
    board.height = row * blockSize;
    board.width = col * blockSize;
    context = board.getContext("2d");

    foodPosition();
    document.addEventListener("keyup", changeDirection);
    //setInterval(update, 1000 / 10);
    if (gameInterval) {
        clearInterval(gameInterval);
    }

    // Start a new game interval based on the chosen speed
    gameInterval = setInterval(update, 1000 / a);
}

function update() {
    if (gameOver) {
        return;
    }

    context.fillStyle = "rgb(56,7,68)";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = "yellow";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX, foodY]);
        foodPosition();
    }

    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }

    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }

    context.fillStyle = "rgb(45,74,122)";
    snakeX += (speedX ) * blockSize;
    snakeY += (speedY * a) * blockSize;

    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }
    context.fillRect(snakeX, snakeY, blockSize, blockSize);

    if (snakeX < 0 || snakeX >= col * blockSize || snakeY < 0 || snakeY >= row * blockSize) {
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
            a = 5;
            break;
        case 'medium':
            a = 10;
            break;
        case 'hard':
            a = 15;
            break;
    }
}
*/

let blockSize = 15;
let col = 30;
let row = 30;

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

document.addEventListener('DOMContentLoaded', (event) => {
    const easyButton = document.getElementById('easyButton');
    const mediumButton = document.getElementById('mediumButton');
    const hardButton = document.getElementById('hardButton');
    const startButton = document.getElementById('startButton');

    easyButton.addEventListener('click', () => {
        fixSpeed('easy');
    });

    mediumButton.addEventListener('click', () => {
        fixSpeed('medium');
    });

    hardButton.addEventListener('click', () => {
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

    board = document.getElementById("board");
    board.height = row * blockSize;
    board.width = col * blockSize;
    context = board.getContext("2d");

    foodPosition();
    document.addEventListener("keyup", changeDirection);

    // Clear any existing game interval
    if (gameInterval) {
        clearInterval(gameInterval);
    }

    // Start a new game interval based on the chosen speed
    gameInterval = setInterval(update, 1000 / a);
}

function update() {
    if (gameOver) {
        return;
    }

    context.fillStyle = "rgb(56,7,68)";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = "yellow";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX, foodY]);
        foodPosition();
    }

    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }

    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }

    context.fillStyle = "rgb(45,74,122)";
    snakeX += (speedX) * blockSize;
    snakeY += (speedY) * blockSize;

    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }
    context.fillRect(snakeX, snakeY, blockSize, blockSize);

    if (snakeX < 0 || snakeX >= col * blockSize || snakeY < 0 || snakeY >= row * blockSize) {
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

