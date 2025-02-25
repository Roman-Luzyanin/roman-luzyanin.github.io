const info = document.querySelector('h2');
const squares = document.querySelectorAll('.square');
const newGame = document.querySelector('#newGame');
const start = document.querySelector('#start');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const cancel = document.querySelector('#cancel');
const dialog = document.querySelector('dialog');

newGame.addEventListener('click', ()=> {
    dialog.showModal();
});

start.addEventListener('click', ()=> {
    squares.forEach(square => square.textContent = '');
    if (player1.value && player2.value) {
        playGame = game(player1.value, player2.value);
        screen();
}});

cancel.addEventListener('click', (e)=> {
    e.preventDefault();
    dialog.close();
});

function square() {
    let value = 0;

    const getValue = ()=> value;

    const changeValue = (sign)=> {
        value = sign;
    }

    return {getValue, changeValue};
}

function game(player1, player2) {
    const row = 3;
    const col = 3;
    const board = [];
    let drawCount = 0;

    for (let i = 0; i < row; i++) {
        board[i] = [];
        for (let j = 0; j < col; j++) {
            board[i].push(square());
        }
    }

    const players = [
        {
          name: player1,
          sign: 1,
        },
        {
          name: player2,
          sign: 2,
        },
    ];

    let activePlayer = players[0];

    const swithPlayer = ()=> {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
        console.log(`${activePlayer.name}'s turn...`);
    }

    const getActivePlayer = ()=> activePlayer;

    const currentBoard = ()=> {
        return board.map((row) => row.map((cell) => cell.getValue()));
    }

    const checkWin = ()=> {
        const board = currentBoard();
        const testRows = board.map(e => e.slice());
        for(let i = 0; i < row; i++) {
            for(let j = 1; j < col; j++) {
                testRows[i][0] *= testRows[i][j];
            }
            if (testRows[i][0] === 1 || testRows[i][0] === 8) return testRows[i][0];
        }

        const testCols = board.map(e => e.slice());
        for (let j = 0; j < col; j++) {
            for(let i = 1; i < row; i++) {
                testCols[0][j] *= testCols[i][j];
            }
            if (testCols[0][j] === 1 || testCols[0][j] === 8) return testCols[0][j];
        }

        const testDiag1 = board.map(e => e.slice());
        for (let i = 1; i < 3; i++) {
            testDiag1[0][0] *= testDiag1[i][i];
        }
        if (testDiag1[0][0] === 1 || testDiag1[0][0] === 8) return testDiag1[0][0];

        const testDiag2 = board.map(e => e.slice());
        testDiag2.reverse();
        for (let i = 1; i < 3; i++) {
            testDiag2[0][0] *= testDiag2[i][i];
        }
        if (testDiag2[0][0] === 1 || testDiag2[0][0] === 8) return testDiag2[0][0];
    }

    const playRound = (row, col)=> {
        if (board[row][col].getValue() !== 0) return;

        board[row][col].changeValue(activePlayer.sign);
        drawCount++;
        if (drawCount === 9) {
            console.log(`Draw...`)
            return info.textContent = `Draw...`;
        } 
        console.log(currentBoard());
        
        if (checkWin()) {
            let win = checkWin();
            win === 1 ? 1 : win = 2;
            board.map((row) => row.map((cell) => cell.changeValue(win)));
            info.textContent = `Win  ${activePlayer.name}`;
             console.log(`Win ${activePlayer.name}`);
             return console.log(currentBoard())
        }
        
        swithPlayer();  
        info.textContent = `${activePlayer.name}'s turn...`;
    }

    console.log(currentBoard());
    console.log(`${activePlayer.name}'s turn...`);
    info.textContent = `${activePlayer.name}'s turn...`;
    return {playRound, currentBoard, getActivePlayer}
}

function screen() {
    squares.forEach(square => square.addEventListener('click', ()=> {
        if (playGame.currentBoard()[square.dataset.row][square.dataset.col] === 0) {
            playGame.getActivePlayer().sign === 1 ? square.textContent = 'X' : square.textContent = 'O';
            playGame.playRound(square.dataset.row, square.dataset.col);
    }}));
        
    squares.forEach(square => square.addEventListener('mouseenter', ()=> {
        if (playGame.currentBoard()[square.dataset.row][square.dataset.col] === 0) {
            playGame.getActivePlayer().sign === 1 ? square.textContent = 'X' : square.textContent = 'O';
    }}));
        
    squares.forEach(square => square.addEventListener('mouseleave', ()=> {
        if (playGame.currentBoard()[square.dataset.row][square.dataset.col] === 0) {
            square.textContent = '';
    }}));
}

