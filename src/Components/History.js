import React from "react";

export default function History({history, moveTo, currentMove}) {
    return <div className={"history-wrapper"}>
        <ul>
            {
                history.map((value, move) => {
                    return <li key={move}>
                        <button
                            className={`btn-move ${move === currentMove ? "active" : ""}`}
                            onClick={() => moveTo(move)}>
                            {move === 0 ? "Go to game start" : `Go to move #${move}`}
                        </button>
                    </li>
                })
            }

        </ul>
    </div>
}
