import React from "react";


export default function Square({value, onClick, isWinningSquare}) {
    return <>
        <button type={"button"}
                style={{color: isWinningSquare ? "red" : "black"}}
                className={"btn square"} onClick={onClick}>
            {value}
        </button>
    </>
}
