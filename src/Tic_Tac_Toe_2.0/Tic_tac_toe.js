import React, {useState} from "react";
import Board from "./Board";
import "./tic-tac-toe.css";
import {calculateWinner} from "./helpers/helpers";

export default function Tic_tac_toe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isNextX, setIsNextX] = useState(false);
    const winner = calculateWinner(board);

    const handleSquareClick = (clickedPosition) => {
        if (board[clickedPosition]) {
            return;
        }

        setBoard((currentSquares) => {
            return currentSquares.map((squareValue, position) => {
                if (clickedPosition === position) {
                    return isNextX ? "X" : "O"
                }
                return squareValue

            })
        })
        setIsNextX(prev => !prev)
    }
    return <div className={"wrapper"}>
        <h1 className={"tic-title"}>Tic Tac Toe</h1>
        <h2 className={"message"}>Message</h2>
        <Board
            board={board}
            handleSquareClick={handleSquareClick}/>
    </div>
}
