const container = document.querySelector('.container');
const dialog = document.querySelector('dialog');
const start  = document.querySelector('.start');
start.disabled = true;
const closeModal = document.querySelector('.closeModal');
const speedChoice = document.querySelector('.speedChoice');
const currentScore = document.querySelector('.current-score');
currentScore.textContent = '-';
const bestScore = document.querySelector('.best-score');
bestScore.textContent = '-';
const grid = document.querySelector('.grid');
const board = [];
let speed = 500;
let score = 0;
let snake;
let snakeCopy;
let apple;
let up, down, left, right;
let num; // number of cells along one side

start.addEventListener('click', ()=> {
    start.disabled = true;
    grid.disabled = true;
    speedChoice.disabled = true;

    let head = snake[snake.length-1];
    let y = Math.floor(head / num);
    let x = head % num;
    
    game = setInterval(()=> {
        if (up) snake[snake.length-2] === (head - num) ? y++ :  y--;
        else if (down) snake[snake.length-2] === (head + num) ? y-- :  y++;
        else if (left) snake[snake.length-2] === (head - 1) ? x++ :  x--;
        else if (right = true) snake[snake.length-2] === (head + 1) ? x-- :  x++;
        
        head = y * num + x;

        if (head === apple) {
            snake.push(head); 
            drawApple(); 
            currentScore.textContent = `${++score}`;
            score > bestScore.textContent ? currentScore.style.color = 'red' : '';
        } else {
            snake.push(head);
            snake.shift();}

        if (snake.slice(0, -1).includes(head) || x < 0 || x > num - 1 || y < 0 || y > num - 1) {
                dialog.showModal();
                clearInterval(game);
                if (bestScore.textContent < score) {
                    num === 10 ? localStorage.setItem('10', score) :
                    num === 15 ? localStorage.setItem('15', score) :
                    localStorage.setItem('20', score);
                }
                snake[snake.length-1] = -1;
                grid.disabled = false;
                speedChoice.disabled = false;}

        drawSnake();
    }, speed);
})

closeModal.addEventListener('click', (e)=> {
    e.preventDefault();
    snake = snakeCopy.slice();
    up = false; down = false; left = false; right = true;
    score = 0;
    currentScore.textContent = 0;
    currentScore.style.color = 'green';
    bestScore.textContent = localStorage.getItem(num) || 0;
    drawSnake();
    start.disabled = false;
    dialog.close();
})

speedChoice.addEventListener('change', (e)=> {
    speedChoice.children[0].disabled = true;
    switch (e.target.value) {
        case '1': speed = 500;
        break;
        case '2': speed = 300;
        break;
        case '3': speed = 100;
        break;
    }
})

document.addEventListener('keydown', (e)=> {
    switch (e.key) {
        case 'w':  up = true; down = false; left = false; right = false;
        break;
        case 's':  up = false; down = true; left = false; right = false;
        break;
        case 'a':  up = false; down = false; left = true; right = false;
        break;
        case 'd':  up = false; down = false; left = false; right = true;
        break;
    }
})

grid.addEventListener('change', (e)=> {
    grid.children[0].disabled = true;
    container.textContent = '';
    up = false; down = false; left = false; right = true;
    score = 0;
    currentScore.textContent = 0;
    currentScore.style.color = 'green';
    bestScore.textContent = localStorage.getItem(e.target.value) || 0;
    start.disabled = false;
    num = +e.target.value;
    item = Math.round(num**(num === 10 ? 1.71 : num === 15 ? 1.73 : 1.74));
    snake = [item, item+1, item+2];
    snakeCopy = snake.slice();
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    for (let i = 0; i < num**2; i++) {
        drawCell(i);
    }
    drawSnake();
    drawApple();

    return [num, snakeCopy];
})

function drawCell(i) {
    const div = document.createElement('div');
    div.classList.add('cell');
    div.setAttribute('data-index', `${i}`);
    container.appendChild(div);
}

function createCell() {
    let value = 0;
    for (let i = 0; i < num; i++) {
        board[i] = [];
        for (let j = 0; j < num; j++) {
            board[i][j] = value;
            value++;
        }
    }
}

function drawSnake() {
    for( let i = 0; i < snake.length; i++) {
        container.querySelectorAll('div').forEach(div => {
            if (snake[i] === +div.dataset.index && i % 2 === 0) {
                div.style.background = 'green';
                if (i === snake.length - 1) {
                    div.classList.add('face');
                    if (right) div.style.transform = 'rotate(0deg)';
                    if (left) div.style.transform = 'rotate(-180deg)';   
                    if (up) div.style.transform = 'rotate(-90deg)';  
                    if (down) div.style.transform = 'rotate(-270deg)';         
                } 
            } else if(snake[i] === +div.dataset.index && i % 2 === 1) {
                div.style.background = 'lightgreen';
                if (i === snake.length - 1) {
                    div.classList.add('face');
                    if (right) div.style.transform = 'rotate(0deg)';
                    if (left) div.style.transform = 'rotate(-180deg)';   
                    if (up) div.style.transform = 'rotate(-90deg)';  
                    if (down) div.style.transform = 'rotate(-270deg)';  
                } 
            }

            if (i !== snake.length - 1) {
                div.classList.remove('face');
                div.style.transform = 'rotate(0deg)';
            } 
            
            if (!snake.includes(+div.dataset.index) && div.style.background !== 'red') {
                div.style.background = 'transparent';
            }

            if (div.style.background !== 'red') div.classList.remove('apple');
        })
    }
}

function drawApple() {
    apple = Math.round(Math.random() * num**2);
    snake.includes(apple) ? drawApple() : apple;
    container.querySelectorAll('div').forEach(div => {
        if (+div.dataset.index === apple) {
            div.style.background = 'red';
            div.classList.add('apple');
        } 
    })
}

