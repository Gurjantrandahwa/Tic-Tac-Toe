import React from "react";


export default function Square({value, onClick}) {
    return <>
        <button type={"button"}
                className={"btn square"} onClick={onClick}>
            {value}
        </button>
    </>
}
