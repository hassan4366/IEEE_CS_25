import { useState } from "react";
import "./Tic-Tac-Toe.css";

const WIN_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

type PlayerSymbol = "X" | "O";

export default function Game() {
  const [board, setBoard] = useState<Array<PlayerSymbol | null>>(
    Array(9).fill(null)
  );
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState<PlayerSymbol | "Draw" | null>(null);
  const [winningLine, setWinningLine] = useState<number[]>([]);
  const [score, setScore] = useState<Record<PlayerSymbol, number>>({
    X: 0,
    O: 0,
  });
  const [roundOver, setRoundOver] = useState(false);

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    const currentSymbol: PlayerSymbol = isXTurn ? "X" : "O";
    newBoard[index] = currentSymbol;
    setBoard(newBoard);

    const result = checkWinner(newBoard);
    if (result) {
      setWinner(result.symbol);
      setWinningLine(result.line);
      setScore((prev) => ({
        ...prev,
        [result.symbol]: prev[result.symbol] + 1,
      }));
      setRoundOver(true);
    } else if (newBoard.every((cell) => cell)) {
      setWinner("Draw");
      setRoundOver(true);
    } else {
      setIsXTurn(!isXTurn);
    }
  };

  const checkWinner = (board: Array<PlayerSymbol | null>) => {
    for (const pattern of WIN_PATTERNS) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return { symbol: board[a] as PlayerSymbol, line: pattern };
      }
    }
    return null;
  };

  const resetBoard = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setWinningLine([]);
    setRoundOver(false);
    setIsXTurn((prev) => !prev);
  };

  const resetAll = () => {
    setScore({ X: 0, O: 0 });
    resetBoard();
    setIsXTurn(true);
  };

  const renderCell = (i: number) => {
    const isWinning = winningLine.includes(i);
    return (
      <div
        key={i}
        className={`cell ${board[i]} ${isWinning ? "highlight" : ""}`}
        onClick={() => handleClick(i)}
      >
        {board[i]}
      </div>
    );
  };

  return (
    <div className="container">
      <h1>Tic Tac Toe</h1>
      <div className="board">{board.map((_, i) => renderCell(i))}</div>
      <div className="scores">
        <p>
          Player 1 (X)
          <br />
          Score: {score.X}
        </p>
        <p>
          Player 2 (O)
          <br />
          Score: {score.O}
        </p>
      </div>
      {winner && (
        <div className="message">
          {winner === "Draw"
            ? "It's a Draw!"
            : `Player ${winner === "X" ? "1" : "2"} Wins!`}
        </div>
      )}
      {!winner && (
        <div className="message">
          {`It's Player ${isXTurn ? "1" : "2"}'s turn`}
        </div>
      )}
      {roundOver && (
        <button onClick={resetBoard} className="btn">
          Continue
        </button>
      )}
      <button onClick={resetAll} className="btn">
        Reset All
      </button>
    </div>
  );
}
