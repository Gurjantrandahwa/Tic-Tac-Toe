import React from "react";


export default function Square({value, onClick, isWinningSquare}) {
    return <>
        <button type={"button"}

                className={`square ${isWinningSquare ? 'winning' : ''} ${
                    value==='X'?'text-green':'text-orange'}`}
                onClick={onClick}>
            {value}
        </button>
    </>
}
