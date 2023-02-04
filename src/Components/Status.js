import React from "react";

export default function Status({current, winner}) {
    const noMoveLeft = current.board.every(el => el !== null)

    return <div className={"status-message"}>
        {winner &&
        <>
            Winner is {'  '}
            <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
                {winner}
                </span>
        </>
        }
        {!winner && !noMoveLeft &&
        <>
            Next player is {"  "}
            <span className={current.isNextX ? "text-green" : 'text-orange'}>
                        {current.isNextX ? 'X' : 'O'}
            </span>
        </>
        }
        {!winner && noMoveLeft &&
            <>
                <span className={"text-green"}>
                    X
                </span>
                {" "} and {" "}
                <span className={"text-orange"}>
                    O
                </span>
                {" "} tied
            </>
        }

    </div>
}
