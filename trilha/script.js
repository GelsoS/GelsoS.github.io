const canvas = document.getElementById('game-board');
const ctx = canvas.getContext('2d');
const turnInfo = document.getElementById('turn-info');
const restartButton = document.getElementById('restart-button');

let currentPlayer = 'human'; // 'human' ou 'computer'
let phase = 'placing'; // 'placing', 'moving', ou 'jumping'
let selectedPiece = null;

// Posições válidas das peças no tabuleiro
const positions = [
    { x: 50, y: 50 }, { x: 300, y: 50 }, { x: 550, y: 50 },
    { x: 100, y: 100 }, { x: 300, y: 100 }, { x: 500, y: 100 },
    { x: 150, y: 150 }, { x: 300, y: 150 }, { x: 450, y: 150 },
    { x: 50, y: 300 }, { x: 100, y: 300 }, { x: 150, y: 300 }, { x: 450, y: 300 }, { x: 500, y: 300 }, { x: 550, y: 300 },
    { x: 150, y: 450 }, { x: 300, y: 450 }, { x: 450, y: 450 },
    { x: 100, y: 500 }, { x: 300, y: 500 }, { x: 500, y: 500 },
    { x: 50, y: 550 }, { x: 300, y: 550 }, { x: 550, y: 550 }
];

let board = Array(positions.length).fill(null);

// Linhas que conectam os pontos do tabuleiro (incluindo trilhas externas, intermediárias e internas)
const lines = [
    [0, 1], [1, 2], [3, 4], [4, 5], [6, 7], [7, 8], // Horizontais externas
    [9, 10], [10, 11], [12, 13], [13, 14], // Horizontais internas
    [15, 16], [16, 17], [18, 19], [19, 20], [21, 22], [22, 23], // Horizontais centrais

    [0, 9], [1,7], [9, 21], [2, 14], [14, 23],  // Verticais externas
    [3, 10], [16,22], [10, 18], [5, 13], [13, 20], // Verticais intermediárias
    [6, 11], [11, 15], [8, 12], [12, 17], // Verticais internas

    [0, 3], [3, 6], [21, 18], [18, 15],  // Verticais da esquerda
    [2, 5], [5, 8], [23, 20], [20, 17] // Verticais da direita
];

function drawBoard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Desenhar as trilhas e conexões
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;

    lines.forEach(([start, end]) => {
        ctx.beginPath();
        ctx.moveTo(positions[start].x, positions[start].y);
        ctx.lineTo(positions[end].x, positions[end].y);
        ctx.stroke();
    });

    // Desenhar as peças
    board.forEach((piece, index) => {
        if (piece !== null) {
            ctx.fillStyle = piece === 'white' ? '#fff' : '#000';
            ctx.beginPath();
            ctx.arc(positions[index].x, positions[index].y, 15, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        }
    });
}

// Verifica se uma trilha foi formada
function checkMill(position, color) {
    const mills = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontais
        [9, 10, 11], [12, 13, 14], [15, 16, 17], // Centrais
        [18, 19, 20], [21, 22, 28], // Internas
        [0, 9, 21], [1, 4, 7], [2, 14, 23], // Verticais esquerda e direita
        [3, 10, 18], [5, 13, 20], [6, 11, 16], [8, 12, 17] // Verticais centrais
    ];

    return mills.some(mill => mill.includes(position) && mill.every(pos => board[pos] === color));
}

// Manipula o clique no canvas
canvas.addEventListener('click', (event) => {
    const { offsetX, offsetY } = event;
    const clickedPosition = positions.findIndex(pos => 
        Math.hypot(pos.x - offsetX, pos.y - offsetY) < 20
    );
    
    if (clickedPosition !== -1) {
        handleClick(clickedPosition);
    }
});

// Lógica de clique do jogador
function handleClick(index) {
    if (currentPlayer === 'human') {
        if (phase === 'placing' && board[index] === null) {
            board[index] = 'white';
            drawBoard();
            if (checkMill(index, 'white')) {
                promptRemovePiece('computer');
            } else {
                switchTurn();
            }
        } else if (phase === 'moving' && board[index] === 'white') {
            selectedPiece = index;
        } else if (selectedPiece !== null && board[index] === null) {
            movePiece(selectedPiece, index);
        }
    }
}

// Função para permitir a remoção de uma peça do oponente após formar uma trilha
// Função corrigida para permitir a remoção de uma peça do oponente após formar uma trilha
function promptRemovePiece(player) {
    turnInfo.textContent = 'Formou uma trilha! Remova uma peça do oponente.';
    
    const removePieceListener = (event) => {
        const { offsetX, offsetY } = event;
        const clickedPosition = positions.findIndex(pos =>
            Math.hypot(pos.x - offsetX, pos.y - offsetY) < 20
        );

        // Verificar se a posição clicada é válida para remoção
        if (
            clickedPosition !== -1 &&
            board[clickedPosition] === (player === 'human' ? 'black' : 'white') &&
            canRemovePiece(clickedPosition, player)
        ) {
            board[clickedPosition] = null;
            drawBoard();
            // Remover o evento após a remoção da peça
            canvas.removeEventListener('click', removePieceListener);
            switchTurn();
        }
    };

    // Adiciona o evento de clique para remover a peça
    canvas.addEventListener('click', removePieceListener);
}

// Função corrigida de checkMill com todas as possíveis trilhas
function checkMill(position, color) {
    const mills = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontais externas
        [9, 10, 11], [12, 13, 14], [15, 16, 17], // Horizontais intermediárias
        [18, 19, 20], [21, 22, 23], // Horizontais internas
        [0, 9, 21], [1, 4, 7], [2, 14, 23], // Verticais laterais
        [3, 10, 18], [5, 13, 20], // Verticais intermediárias
        [6, 11, 15], [8, 12, 17], // Verticais internas
        [0, 3, 6], [21, 18, 15], // Verticais à esquerda
        [2, 5, 8], [23, 20, 17] // Verticais à direita
    ];

    // Verifica se a posição faz parte de uma das trilhas formadas
    return mills.some(mill => mill.includes(position) && mill.every(pos => board[pos] === color));
}

// Verifica se uma peça pode ser removida (corrigido para considerar peças em trilhas corretamente)
function canRemovePiece(position, player) {
    const opponentColor = player === 'human' ? 'black' : 'white';
    const allOpponentPieces = board.map((piece, index) => piece === opponentColor ? index : null).filter(index => index !== null);

    // Verificar se há peças fora de trilhas que podem ser removidas
    const piecesNotInMills = allOpponentPieces.filter(pos => !checkMill(pos, opponentColor));

    // Permitir a remoção se a peça não estiver em uma trilha ou se todas as peças estiverem em trilhas
    return piecesNotInMills.length === 0 || !checkMill(position, opponentColor);
}


// Verifica se uma trilha foi formada
function checkMill(position, color) {
    const mills = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontais
        [9, 10, 11], [12, 13, 14], [15, 16, 17], // Centrais
        [18, 19, 20], [21, 22, 23], // Internas
        [0, 9, 21], [1, 4, 7], [2, 14, 23], // Verticais esquerda e direita
        [3, 10, 18], [5, 13, 20], [6, 11, 16], [8, 12, 17] // Verticais centrais
    ];

    return mills.some(mill => mill.includes(position) && mill.every(pos => board[pos] === color));
}


// Move a peça selecionada para uma posição válida
function movePiece(from, to) {
    board[to] = board[from];
    board[from] = null;
    selectedPiece = null;
    drawBoard();
    if (checkMill(to, currentPlayer === 'human' ? 'white' : 'black')) {
        promptRemovePiece(currentPlayer === 'human' ? 'computer' : 'human');
    } else {
        switchTurn();
    }
}

// Alterna o turno do jogador
function switchTurn() {
    currentPlayer = currentPlayer === 'human' ? 'computer' : 'human';
    turnInfo.textContent = `Vez do jogador: ${currentPlayer === 'human' ? 'Você (Branco)' : 'Computador (Preto)'}`;
    
    if (currentPlayer === 'computer') {
        computerMove();
    }
}

// Movimento básico do computador
function computerMove() {
    setTimeout(() => {
        const availablePositions = board.map((piece, index) => piece === null ? index : null).filter(index => index !== null);
        const randomPosition = availablePositions[Math.floor(Math.random() * availablePositions.length)];
        board[randomPosition] = 'black';
        drawBoard();
        if (checkMill(randomPosition, 'black')) {
            promptRemovePiece('human');
        } else {
            switchTurn();
        }
    }, 500);
}

// Reinicia o jogo
function resetGame() {
    currentPlayer = 'human';
    board = Array(positions.length).fill(null);
    phase = 'placing';
    selectedPiece = null;
    turnInfo.textContent = 'Vez do jogador: Você (Branco)';
    drawBoard();
}

// Inicializa o jogo
drawBoard();
restartButton.addEventListener('click', resetGame);
