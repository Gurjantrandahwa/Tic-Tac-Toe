import React, {useEffect, useState} from "react";

const TicTacToe = () => {
    const [turn, setTurn] = useState('X')
    const [cells, setCells] = useState(Array(9).fill(''))
    const [winner, setWinner] = useState()
    const [winnerName, setWinnerName] = useState()
    useEffect(() => {
        const across = () => {
            let answer = false;
            for (let i = 0; i < 9; i += 3) {
                answer |= (cells[i] === cells[i + 1] &&
                    cells[i] === cells[i + 2] &&
                    cells[i] !== '')
            }
            return answer
        }
        const down = () => {
            let answer = false;
            for (let i = 0; i < 3; i++) {
                answer |= (cells[i] === cells[i + 3] &&
                    cells[i] === cells[i + 6] &&
                    cells[i] !== '')
            }
            return answer
        }
        const diagonal = () => {
            return ((cells[0] === cells[4] &&
                cells[0] === cells[8] && cells[0] !== '') ||
                (cells[2] === cells[4] && cells[2] === cells[6] &&
                    cells[2] !== ''))
        }
        const checkWin = () => {
            return across() || down() || diagonal()
        }
        const checkTie = () => {
            let count = 0
            cells.forEach((cell) => {
                if (cell !== '') {
                    count++
                }
            })
            return count === 9
        }
        if (checkWin()) {
            if (turn === "X") {
                setWinnerName("O")
            }
            if (turn === "O") {
                setWinnerName("X")
            }
            setWinner("Player Wins !")
            setCells({active: false})
        } else if (checkTie()) {
            setWinner("It's a Tie !")
        }
    }, [turn])
    const handleReset = () => {
        setWinner(null)
        setCells(Array(9).fill(''))
    }
    const handleClick = (num) => {
        if (cells[num] !== '') {
            alert("Already clicked")
            return;
        }
        let squares = [...cells]
        if (turn === 'X') {
            squares[num] = 'X'
            setTurn('O')
        } else if (turn === 'O') {
            squares[num] = 'O'
            setTurn('X')
        }
        setCells(squares)
    }
    const Cell = ({num}) => {
        return <td onClick={() => {
            handleClick(num)
        }}>{cells[num]}
        </td>
    }
    return <div>
        <div className={"box-text"}>
            <h1>Tic-Tac-Toe </h1>
            <h3>Player : {turn}</h3>
        </div>
        <div>
            <table>
                <tbody>
                <tr>
                    <Cell num={0}/>
                    <Cell num={1}/>
                    <Cell num={2}/>
                </tr>
                <tr>
                    <Cell num={3}/>
                    <Cell num={4}/>
                    <Cell num={5}/>
                </tr>
                <tr>
                    <Cell num={6}/>
                    <Cell num={7}/>
                    <Cell num={8}/>
                </tr>
                </tbody>
            </table>
            <div className={"margin"}>
                <button onClick={() => {
                    handleReset()
                }}>Play Again
                </button>
            </div>
            {
                winner && (
                    <div className={"turn"}>
                        <h3>{winnerName} {winner}</h3>
                    </div>
                )
            }
        </div>
    </div>
}
export default TicTacToe