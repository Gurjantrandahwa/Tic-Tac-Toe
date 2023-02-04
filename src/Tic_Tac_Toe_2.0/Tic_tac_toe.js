import React, {useState} from "react";
import Board from "../Components/Board";
import "./tic-tac-toe.scss"
import {calculateWinner} from "../Components/helpers";
import History from "../Components/History";
import Status from "../Components/Status";

const NEW_GAME = [{board: Array(9).fill(null), isNextX: false}]
export default function Tic_tac_toe() {
    const [history, setHistory] = useState(NEW_GAME);
    const [currentMove, setCurrentMove] = useState(0)
    const current = history[currentMove]
    const {winner, winningSquares} = calculateWinner(current.board);

    const handleSquareClick = (clickedPosition) => {
        if (current.board[clickedPosition] || winner) {
            return;
        }
        setHistory(prev => {
            const last = prev[prev.length - 1]

            const newBoard = last.board.map((squareValue, position) => {
                if (clickedPosition === position) {
                    return last.isNextX ? "X" : "O"
                }
                return squareValue
            });
            return prev.concat({board: newBoard, isNextX: !last.isNextX});
        });
        setCurrentMove(prevState => prevState + 1)
    }
    const moveTo = (move) => {
        setCurrentMove(move)
    }
    const newGame = () => {
        setHistory(NEW_GAME)
        setCurrentMove(0)
    }
    return <div className={"container"}>
        <div className={"app-wrapper"}>
            <h1>
                Tic <span className={"text-green"}>Tac</span> Toe
            </h1>
            <Status winner={winner} current={current}/>
            <Board
                board={current.board}
                handleSquareClick={handleSquareClick}
                winningSquares={winningSquares}/>

            <button
                className={`btn-reset ${winner?'active':""}`}
                onClick={newGame}
            >
                Start New Game
            </button>
            <History history={history} moveTo={moveTo} currentMove={currentMove}/>
        </div>

    </div>
}
