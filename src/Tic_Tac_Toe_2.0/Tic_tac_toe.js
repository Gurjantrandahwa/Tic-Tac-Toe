import React from "react";
import Board from "./Board";
import "./tic-tac-toe.css";
export default function Tic_tac_toe() {
    return<div className={"wrapper"}>
        <h1>Tic Tac Toe</h1>
        <Board/>
    </div>
}