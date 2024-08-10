// script.js
const cells = document.querySelectorAll(".cell");
const message = document.getElementById("message");
const resetButton = document.getElementById("reset");
const scoreHuman = document.getElementById("scoreHuman");
const scoreComputer = document.getElementById("scoreComputer");

let currentPlayer = "X"; // O jogador humano começa
let board = ["", "", "", "", "", "", "", "", ""];
let humanScore = 0;
let computerScore = 0;

// Função que verifica se há um vencedor ou empate e retorna o vencedor e a combinação vencedora
const checkWinner = () => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combo of winningCombinations) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], combination: combo };
    }
  }
  return board.includes("") ? null : { winner: "Draw" };
};

// Função para desenhar a linha de vitória
const drawWinningLine = (combination) => {
  const lines = {
    "0,1,2": "line-horizontal-top-line",
    "3,4,5": "line-horizontal-middle-line",
    "6,7,8": "line-horizontal-bottom-line",
    "0,3,6": "line-vertical-left-line",
    "1,4,7": "line-vertical-middle-line",
    "2,5,8": "line-vertical-right-line",
    "0,4,8": "line-diagonal1",
    "2,4,6": "line-diagonal2",
  };

  const lineClass = lines[combination.join(",")];
  const lineElement = document.createElement("div");
  lineElement.className = lineClass;
  document.querySelector(".board").appendChild(lineElement);
};

// Função para avaliar a situação do tabuleiro
const evaluateBoard = (b) => {
  const result = checkWinner();
  if (result?.winner === "X") return -10;
  if (result?.winner === "O") return 10;
  return 0;
};

// Função Minimax
const minimax = (b, depth, isMaximizing) => {
  const score = evaluateBoard(b);
  if (score === 10) return score;
  if (score === -10) return score;
  if (!b.includes("")) return 0;

  if (isMaximizing) {
    let best = -Infinity;
    for (let i = 0; i < b.length; i++) {
      if (b[i] === "") {
        b[i] = "O";
        best = Math.max(best, minimax(b, depth + 1, !isMaximizing));
        b[i] = "";
      }
    }
    return best;
  } else {
    let best = Infinity;
    for (let i = 0; i < b.length; i++) {
      if (b[i] === "") {
        b[i] = "X";
        best = Math.min(best, minimax(b, depth + 1, !isMaximizing));
        b[i] = "";
      }
    }
    return best;
  }
};

// Função para escolher a melhor jogada para o computador
const findBestMove = () => {
  // Verificar se existe uma jogada vencedora imediata
  for (let i = 0; i < board.length; i++) {
    if (board[i] === "") {
      board[i] = "O";
      if (checkWinner() === "O") {
        board[i] = ""; // Desfaz a jogada temporária
        return i; // Retorna a jogada vencedora
      }
      board[i] = ""; // Desfaz a jogada temporária
    }
  }

  // Verificar se o jogador pode vencer na próxima jogada e bloquear
  for (let i = 0; i < board.length; i++) {
    if (board[i] === "") {
      board[i] = "X";
      if (checkWinner() === "X") {
        board[i] = ""; // Desfaz a jogada temporária
        return i; // Bloquear a jogada do jogador
      }
      board[i] = ""; // Desfaz a jogada temporária
    }
  }

  // Se não houver jogada vencedora ou bloqueio, seguir com a estratégia minimax
  let bestVal = -Infinity;
  let bestMove = -1;

  for (let i = 0; i < board.length; i++) {
    if (board[i] === "") {
      board[i] = "O";
      const moveVal = minimax(board, 0, false);
      board[i] = "";
      if (moveVal > bestVal) {
        bestMove = i;
        bestVal = moveVal;
      }
    }
  }

  return bestMove;
};

// Função para fazer uma jogada
const makeMove = (index, player) => {
  board[index] = player;
  cells[index].textContent = player;
};

// Função para lidar com o clique do jogador
const handleClick = (e) => {
  const cellIndex = parseInt(e.target.id.replace("cell", ""));
  if (!board[cellIndex] && currentPlayer === "X") {
    makeMove(cellIndex, "X");
    const result = checkWinner();
    if (result) {
      if (result.winner === "Draw") {
        message.textContent = "Empate!";
      } else {
        if (result.winner === "X") {
          message.textContent = "Humano ganhou!";
          humanScore++;
        } else {
          message.textContent = "Computador ganhou!";
          computerScore++;
        }
        scoreHuman.textContent = `Humano: ${humanScore}`;
        scoreComputer.textContent = `Computador: ${computerScore}`;
        drawWinningLine(result.combination);
      }
      cells.forEach((cell) => cell.removeEventListener("click", handleClick));
      return;
    }

    currentPlayer = "O"; // Agora é a vez do computador
    message.textContent = "A vez do computador...";

    setTimeout(() => {
      const computerCell = findBestMove();
      makeMove(computerCell, "O");
      const result = checkWinner();
      if (result) {
        if (result.winner === "Draw") {
          message.textContent = "Empate!";
        } else {
          if (result.winner === "X") {
            message.textContent = "Humano ganhou!";
            humanScore++;
          } else {
            message.textContent = "Computador ganhou!";
            computerScore++;
          }
          scoreHuman.textContent = `Humano: ${humanScore}`;
          scoreComputer.textContent = `Computador: ${computerScore}`;
          drawWinningLine(result.combination);
        }
        cells.forEach((cell) => cell.removeEventListener("click", handleClick));
        return;
      }

      currentPlayer = "X"; // De volta ao jogador
      message.textContent = "É a vez do jogador X";
    }, 500); // Atraso para simular o pensamento do computador
  }
};

// Função para reiniciar o jogo
const resetGame = () => {
  board = ["", "", "", "", "", "", "", "", ""];
  cells.forEach((cell) => (cell.textContent = ""));
  message.textContent = "É a vez do jogador X";
  currentPlayer = "X"; // Jogador começa novamente
  cells.forEach((cell) => cell.addEventListener("click", handleClick));
  document
    .querySelectorAll(
      ".line-horizontal-top-line, .line-horizontal-middle-line, .line-horizontal-bottom-line," +
        ".line-vertical-left-line, .line-vertical-right-line, .line-vertical-middle-line," +
        ".line-diagonal1, .line-diagonal2"
    )
    .forEach((line) => line.remove());
};

cells.forEach((cell) => cell.addEventListener("click", handleClick));
resetButton.addEventListener("click", resetGame);

message.textContent = "É a vez do jogador X";
