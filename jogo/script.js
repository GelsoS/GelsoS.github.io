const cells = document.querySelectorAll('.cell');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const resetButton = document.getElementById('reset-button');

let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X'; // Jogador é X, Computador é O
let playerScore = 0;
let computerScore = 0;
let gameActive = true;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWin() {
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return { winner: board[a], winningCells: [a, b, c] };
        }
    }
    return null;
}

function checkDraw() {
    return board.every(cell => cell !== '');
}

function updateScore(winner) {
    if (winner === 'X') {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else if (winner === 'O') {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }
}

function resetBoard() {
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('X', 'O', 'winning-cell');
    });
}

function highlightWinningCells(winningCells) {
    winningCells.forEach(index => {
        cells[index].classList.add('winning-cell');
    });
}

function minimax(board, depth, isMaximizing) {
    const result = checkWin();
    if (result) {
        return result.winner === 'O' ? 10 - depth : depth - 10;
    }
    if (checkDraw()) {
        return 0;
    }

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') {
                board[i] = 'O';
                let score = minimax(board, depth + 1, false);
                board[i] = '';
                bestScore = Math.max(score, bestScore);
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') {
                board[i] = 'X';
                let score = minimax(board, depth + 1, true);
                board[i] = '';
                bestScore = Math.min(score, bestScore);
            }
        }
        return bestScore;
    }
}

function computerMove() {
    let bestScore = -Infinity;
    let bestMove = null;
    for (let i = 0; i < board.length; i++) {
        if (board[i] === '') {
            board[i] = 'O';
            let score = minimax(board, 0, false);
            board[i] = '';
            if (score > bestScore) {
                bestScore = score;
                bestMove = i;
            }
        }
    }
    if (bestMove !== null) {
        board[bestMove] = 'O';
        cells[bestMove].textContent = 'O';
        cells[bestMove].classList.add('O');
        const result = checkWin();
        if (result) {
            updateScore(result.winner);
            gameActive = false;
            highlightWinningCells(result.winningCells);
            alert(`Computador venceu!`);
        } else if (checkDraw()) {
            gameActive = false;
            alert(`Empate!`);
        }
    }
}

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        const cellIndex = cell.getAttribute('data-index');
        if (board[cellIndex] === '' && gameActive) {
            board[cellIndex] = currentPlayer;
            cell.textContent = currentPlayer;
            cell.classList.add(currentPlayer);
            const result = checkWin();
            if (result) {
                updateScore(result.winner);
                gameActive = false;
                highlightWinningCells(result.winningCells);
                alert(`Jogador venceu!`);
            } else if (checkDraw()) {
                gameActive = false;
                alert(`Empate!`);
            } else {
                currentPlayer = 'O';
                setTimeout(computerMove, 500);
                currentPlayer = 'X';
            }
        }
    });
});

resetButton.addEventListener('click', () => {
    resetBoard();
});